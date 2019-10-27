import React, { Component } from "react";
import axios from "axios";

class Location extends Component {
	state = {
		latitude: "",
		longitude: "",
		searchQuery: "",
		results: [],
		singleResult: {}
	};

	componentDidMount() {
		this.getLocation();
		// console.log("WEBPACK IS WORKING");
	}

	getLocation = () => {
		navigator.geolocation.getCurrentPosition((response) => {
			const { latitude, longitude } = response.coords;
			this.setState({ latitude, longitude });

			console.log("lat and long", this.state);
		});
	};

	getVenues = async () => {
		try {
			let query = this.state.searchQuery;
			let ll = `${this.state.latitude},${this.state.longitude}`;
			let client_id = "POJRSULYK3BL2FVPTOFBLX40F0B3PMCPCPEF2SHMSQWYEGFT";
			let client_secret = "PNLMONJFCXLUUVSF5SB22SAFI5VK3UZZB4OVW4DW1D13OKTN";
			let v = "20140303";

			const queryTemplate = `https://api.foursquare.com/v2/venues/search?query=${query}&ll=${ll}&client_id=${client_id}&client_secret=${client_secret}&v=${v}`;
			const response = await axios.get(queryTemplate);

			const results = response.data.response.venues;
			console.log("venues: ", results);
			this.setState({ results });
			console.log("first venue", results[0]);
		} catch (err) {
			console.error(err);
		}
	};

	render() {
		return <div></div>;
	}
}

export default Location;
