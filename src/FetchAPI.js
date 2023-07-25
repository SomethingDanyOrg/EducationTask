import './App.css';
import { Button } from '@carbon/react';
import React  from "react";

function FetchAPI() {
    const apiGet = (arg, elementName) => {
        fetch(arg)
            .then(response => response.json())
            .then(json =>
                document.getElementById(elementName).innerHTML =
                    JSON.stringify(json.main['feels_like']))
    };

    return(
        <div>
            <code>Weather in Omsk:</code> <br/><br/>

            <Button onClick={() => apiGet('https://api.openweathermap.org/data/2.5/weather?lat=54.991375&lon=73.371529&appid=b80b988b4d398ce43477baef65f8fc0f&units=metric', 'weather')} kind='primary' size='lg' disabled={false}>Get Weather in Omsk</Button><br/><br/>
            <Button onClick={() => apiGet('https://api.openweathermap.org/data/2.5/weather?lat=45.071096&lon=-69.891586&appid=b80b988b4d398ce43477baef65f8fc0f&units=metric', 'weather')} kind='primary' size='lg' disabled={false}>Get Weather in Moscow</Button><br/><br/>
            <Button onClick={() => apiGet('https://api.openweathermap.org/data/2.5/weather?lat=59.938732&lon=30.316229&appid=b80b988b4d398ce43477baef65f8fc0f&units=metric', 'weather')} kind='primary' size='lg' disabled={false}>Get Weather in Saint-Petersburg</Button><br/><br/>

            <p id='weather'>***</p>

        </div>
    );
}

export default FetchAPI;