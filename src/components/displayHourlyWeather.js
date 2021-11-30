import React from "react";
import './displayHourly.css'
import { convertTimestamp, getIconUrl } from "../services/weatherCommon";

function DisplayHourlyWeather(props) {
    const { data } = props;

    return (
        <div>
            <h3>Hourly Weather</h3>

            <table className="durationTable">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Icon</th>
                        <th>Temprature</th>
                        <th>Wind speed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0, 5).map((link, index) =>
                        <tr key={index}>
                            <td>
                                {convertTimestamp(link.dt)}
                            </td>
                            <td>
                                <img src={getIconUrl(link.weather)} alt="" />
                            </td>
                            <td>
                                {link.temp}
                            </td>
                            <td>
                                {link.wind_speed}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayHourlyWeather;