import React, { Component } from "react";

class Location extends Component {
	state = {
		latitude: "",
		longitude: ""
		// searchQuery: "",
		// results: [],
		// singleResult: {}
	};

	getLocation = () => {
		navigator.geolocation.getCurrentPosition((response) => {
			const { latitude, longitude } = response.coords;
			this.setState({ latitude, longitude });

			console.log("lat and long", this.state);
		});
	};

	componentDidMount() {
		this.getLocation();
	}

	render() {
		return <div></div>;
	}
}

export default Location;
