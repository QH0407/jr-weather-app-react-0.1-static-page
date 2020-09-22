import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function Main(props) {
	return (
		<main>
			<WeatherCondition
				cityName = {props.cityName}
				current = {props.current}
				unit = {props.unit}
			/>
			<WeatherForecast 
				unit = {props.unit}
				forecasts = {props.forecasts}
				limit = {props.limit}
				handleChangeLimit = {props.handleChangeLimit}
			
			/>
		</main>
	);
}

export default Main;
