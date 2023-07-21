import './App.css';
import { Button } from '@carbon/react';
import React  from "react";

function FetchAPI() {
    const apiGet = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=54.991375&lon=73.371529&appid=b80b988b4d398ce43477baef65f8fc0f&units=metric')
            .then(response => response.json())
            .then(json =>
                document.getElementById('weather').innerHTML =
                    JSON.stringify(json.main['feels_like']))
    };

    return(
        <div>
            <code>Weather in Omsk:</code> <br/><br/>

            <Button onClick={apiGet} kind='primary' size='lg' disabled={false}>Get Weather</Button><br/><br/>
            <p id='weather'>***</p>

        </div>
    );
}

export default FetchAPI;