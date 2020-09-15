import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';

import './App.css';

function App() {
	return (
		<div className="weather-channel__container">
			<Header />
			<Navigation />
			<Main />
			<Footer />
	  	</div>
	);
}

export default App;
