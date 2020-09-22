import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import {getWeather} from './axios';
import './App.css';



class App extends React.Component {

		state = {
			input: '',
			cityName: '',
			current: {},
			forecasts: [],
			limit: 5,
			unit: "c",
		};


	componentDidMount(){
		
		getWeather('Brisbane').then(this.updateWeather) 
			
	}

	updateWeather = (data) => {
			
		const cityName = data.city.name;
		const current = data.current;
		const forecasts = data.forecast.slice(0,10);
		this.setState({cityName, current, forecasts});
	}

	handleChangeLimit = limit => {
		this.setState({limit});
	}

	handleInputChange = (event) => {
		const value = event.target.value;
		this.setState({input: value});
	}

	handleSearch = () => {
		getWeather(this.state.input).then(this.updateWeather);
	}

	toggleUnit =() => {
		this.setState(state =>({unit: state.unit === "c" ? "f" : "c"}));
	}

	render(){
			return (
  	<div className="weather-channel__container">
			<Header />
			<Navigation
				toggleUnit = {this.toggleUnit}
				input = {this.state.input}
				unit = {this.state.unit}
				handleInputChange = {this.handleInputChange}
				handleSearch = {this.handleSearch}
			/>
			<Main 
				unit = {this.state.unit}
				cityName = {this.state.cityName}
				current = {this.state.current}
				forecasts = {this.state.forecasts}
				handleChangeLimit = {this.handleChangeLimit}
				limit = {this.state.limit}
			/>
			<Footer />
	  	</div>
	);
	}
}

export default App;
