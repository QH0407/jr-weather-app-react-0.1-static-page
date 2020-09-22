import React from 'react';

function Navigation(props) {
	return (
		<nav>
		  	<div>
				<input className="search-input" value={props.input} onChange={props.handleInputChange} />
				<button className="search-btn" onClick={props.handleSearch}>
					<i className="fa fa-search" />
				</button>
				<button className="temp-switch" onClick={props.toggleUnit}>
					<i
						className="fa fa-thermometer-empty temp-switch__icon"
						aria-hidden="true"
					/>
					<sup>&deg;</sup>{props.unit.toUpperCase()}
				</button>
		  	</div>
		</nav>
	);
}

export default Navigation;
