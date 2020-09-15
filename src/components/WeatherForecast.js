import React from 'react';

import ForecastRow from './ForecastRow';
import axios from 'axios';
import {format} from "date-fns";

class WeatherForecast extends React.Component {
	state = {
		forecasts: [], 
	}

	componentDidMount(){
		axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
		.then((res) => {
			const forecasts = res.data.data.forecast.slice(0,10);
			this.setState({forecasts});
		})
	}

	render() {
	return (
		<section class="weather-forecast">
			<div class="forecast__switch">
				<button class="forecast__switch_0 switch-active">5 items</button>
				<button class="forecast__switch_1">10 items</button>
			</div>
			{this.state.forecasts.map(forecast => {
				const date = new Date(forecast.time);
				const day = format(date, "EEE");
				const time = format(date, "HH:mm");

				return (
				<ForecastRow 
				key={forecast.time}
				day={day} 
				high={forecast.maxCelsius} 
				low={forecast.minCelsius} 
				time={time} />
			);
				})}
		</section>
	);
	}
}

export default WeatherForecast;
