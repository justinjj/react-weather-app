import React from "react";
import './displayweather.css'

function DisplayWeather(props) {
    const { data } = props;

    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    return (
        <div className="displayweather">
            <div className="maincard">
                <span className="cardtitle">
                    {data.name}, {data.sys.country}. Weather
                </span>
                <span className="cardsubtitle">
                    As of {new Date().toString()}
                </span>
                <h1>
                    {Math.floor(data.main.temp) - 273}
                    <sup>o</sup>
                    <img src={iconUrl} alt="weather" />
                
                </h1>
            </div>
            <div className="weatherdetails">
                <div className="section">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Temprature High/Low</h4>
                                </td>
                                <td>
                                    <span>
                                        {Math.floor(data.main.temp_max - 273.15)}/ {" "}
                                        {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Humidity</h4>
                                </td>
                                <td>
                                    <span>
                                        {data.main.humidity} %
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Wind</h4>
                                </td>
                                <td>
                                    <span>
                                        {Math.floor((data.wind.speed * 18) / 5)}/ Km/hr
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Sunset</h4>
                                </td>
                                <td>
                                    <span>
                                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Sunrise</h4>
                                </td>
                                <td>
                                    <span>
                                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather;