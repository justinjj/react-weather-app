import React, { useState, useEffect } from "react";
import "./weather.css";
import DisplayWeather from "./DisplayWeather";
import DisplayHourlyWeather from "./displayHourlyWeather";
import DisplayDailyWeather from "./displayDailyWeather";
import DisplayWeakOverview from "./displayWeakOverview";

function Weather() {

    const APIKEY = '68ce3191897cf3d62632c58d55bd2a19';

    const [form, setForm] = useState({
        city: "",
        country: ""
    })

    const [weather, setWeather] = useState([]);

    const [allWeather, setallWeather] = useState([]);


    useEffect(() => {
        position()
    }, [])

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setForm({ ...form, city: value })
        }

        if (name === "country") {
            setForm({ ...form, country: value })
        }
    }

    async function position() {
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition(
                position => {
                    getGeoWeatherData(position.coords.latitude, position.coords.longitude);
                    getAllCall(position.coords.latitude, position.coords.longitude);
                },
                err => console.log(err)
            );
        } else {
            console.log('Permit Denied');
        }

    }

    async function getGeoWeatherData(latitude, longitude) {

        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
        )
            .then((res) => res.json())
            .then((data) => data);

        setWeather(
            {
                data: data
            }
        )
    }

    async function getAllCall(latitude, longitude) {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,current&appid=${APIKEY}`
        )
            .then((res) => res.json())
            .then((data) => data);

        setallWeather(
            {
                data: data
            }
        )
    }

    async function weatherData(e) {
        e.preventDefault();

        if (form.city === '') {
            alert('Add Values');
        } else {
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            )
                .then((res) => res.json())
                .then((data) => data);

            setWeather(
                {
                    data: data
                }
            )
        }
    }

    return (
        <div className="weather">
            <p className="title">Weather App</p>
            <form>
                <input type="text" name="city" placeholder="city" value={form.city} onChange={e => handleChange(e)} />
                <input type="text" name="country" placeholder="country" value={form.country} onChange={e => handleChange(e)} />
                <button className="getweather" onClick={e => weatherData(e)}>Submit</button>
            </form>
            {
                weather.data !== undefined ?
                    <div>
                        <DisplayWeather data={weather.data}></DisplayWeather>
                    </div>
                    : null
            }
            {
                allWeather.data !== undefined ?
                    <div>
                        <DisplayHourlyWeather data={allWeather.data.hourly}></DisplayHourlyWeather>
                    </div>
                    : null
            }
            {
                allWeather.data !== undefined ?
                    <div>
                        <DisplayDailyWeather data={allWeather.data.daily}></DisplayDailyWeather>
                    </div>
                    : null
            }
            {/* {
                allWeather.data !== undefined ?
                    <div>
                        <DisplayWeakOverview data={allWeather.data.alerts}></DisplayWeakOverview>
                    </div>
                    : null
            } */}
        </div>
    )
}

export default Weather;