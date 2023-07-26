import './App.scss';
import { Button } from '@carbon/react';
import React from "react";
import { Grid, Column } from '@carbon/react';
import configDate from './config.json'
import axios from "axios";

function GetWeather() {
    const token = configDate.API_KEY_WEATER;
    const  getMethod = (lat, lon, elementName) =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric`)
            .then(function (response){
                document.getElementById(elementName).innerHTML = JSON.stringify(response.data.main['feels_like']);
            })
            .catch(function (error){
                document.getElementById(elementName).innerHTML = JSON.stringify('ERROR');
            })
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
                    <Button onClick={() => getMethod('54.991375', '73.371529', 'Weather_omsk')} kind='tertiary' size='lg'>Get Weather</Button>
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
                    <Button onClick={() => getMethod('45.071096', '-69.891586', 'Weather_msk')} kind='tertiary' size='lg'>Get Weather</Button>
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
                    <Button onClick={() => getMethod('59.938732', '30.316229', 'Weather_spb')} kind='tertiary' size='lg'>Get Weather</Button>
                </Column>
            </Grid>
        </div>
    );
}

export default GetWeather ;
