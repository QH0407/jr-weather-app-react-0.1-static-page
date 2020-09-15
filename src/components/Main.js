import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function Main() {
	return (
		<main>
			<WeatherCondition />
			<WeatherForecast />
		</main>
	);
}

export default Main;
