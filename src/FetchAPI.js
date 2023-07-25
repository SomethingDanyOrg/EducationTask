import './App.scss';
import { Button } from '@carbon/react';
import React from "react";
import { Grid, Column } from '@carbon/react';


function FetchAPI() {
    const apiKey = 'b80b988b4d398ce43477baef65f8fc0f';
    const apiGet = (lat, lon, elementName) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(json =>
                document.getElementById(elementName).innerHTML =
                    JSON.stringify(json.main['feels_like']))
    };

    return(
        <div className='Weather'>
            <Grid id='Weather-Block'>
                <Column lg={5} md={4} sm={8} id="Weather-Block__Info">
                    <div data-text="OMSK:"></div>
                </Column>
                <Column lg={6} md={4} sm={8} id="Weather-Block__Result">
                    <div data-text="Weather..." id='Weather_omsk'></div>
                </Column>
                <Column lg={5} md={4} sm={8} id="Weather-Block__Button">
                    <Button onClick={() => apiGet('54.991375', '73.371529', 'Weather_omsk')} kind='tertiary' size='lg'>Get Weather</Button>
                </Column>
            </Grid>
            <Grid id='Weather-Block'>
                <Column lg={5} md={4} sm={8} id="Weather-Block__Info">
                    <div data-text="MSK:"></div>
                </Column>
                <Column lg={6} md={4} sm={8} id="Weather-Block__Result">
                    <div data-text="Weather..." id="Weather_msk"></div>
                </Column>
                <Column lg={5} md={4} sm={8} id="Weather-Block__Button">
                    <Button onClick={() => apiGet('45.071096', '-69.891586', 'Weather_msk')} kind='tertiary' size='lg'>Get Weather</Button>
                </Column>
            </Grid>
            <Grid id='Weather-Block'>
                <Column lg={5} md={4} sm={8} id="Weather-Block__Info">
                    <div data-text="SPB:"></div>
                </Column>
                <Column lg={6} md={4} sm={8} id="Weather-Block__Result">
                    <div data-text="Weather..." id='Weather_spb'></div>
                </Column>
                <Column lg={5} md={4} sm={8} id="Weather-Block__Button">
                    <Button onClick={() => apiGet('59.938732', '30.316229', 'Weather_spb')} kind='tertiary' size='lg'>Get Weather</Button>
                </Column>
            </Grid>
        </div>
    );
}

export default FetchAPI ;
