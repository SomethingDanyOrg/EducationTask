import React  from "react";

function FetchAPI() {
    const apiGet = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=54.991375&lon=73.371529&appid=b80b988b4d398ce43477baef65f8fc0f&units=metric')
            .then(response => response.json())
            .then(json =>
                document.getElementById('wather').innerHTML =
                    JSON.stringify(json.main['feels_like']))
    };

    return(
        <div>
            Wather in Omsk: <br/>

            <button onClick={apiGet}>Click here</button><br/>
            <p id='wather'>***</p>

        </div>
    );
}

export default FetchAPI;