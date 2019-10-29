import React, { Component } from "react";
import axios from "axios";

class SearchBar extends Component {
	state = {
		latitude: "40.712776",
		longitude: "-74.005974",
		searchQuery: "",
		searchLocation: "",
		results: []
		// singleResult: {}
	};

	getVenues = async () => {
		try {
			let query = this.state.searchQuery;
			let ll = `${this.state.latitude},${this.state.longitude}`;
			let client_id = "POJRSULYK3BL2FVPTOFBLX40F0B3PMCPCPEF2SHMSQWYEGFT";
			let client_secret = "PNLMONJFCXLUUVSF5SB22SAFI5VK3UZZB4OVW4DW1D13OKTN";
			let v = "20140303";

			console.log("ll: ", ll);

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

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = (event) => {
		// console.log(event);
		event.preventDefault();
		if (!this.state.searchQuery.length) {
			console.log("Please enter something");
		} else {
			// this.getVenues();
			console.log("terms: ", this.state.searchQuery);
			console.log("location: ", this.state.searchLocation);
		}
	};

	// need to clear search bar after clicking submit

	render() {
		const { searchQuery, searchLocation } = this.state;
		return (
			<div>
				<form className="form-inline" onSubmit={this.onSubmit}>
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Find ..."
						aria-label=""
						onChange={this.onChange}
						defaultValue={searchQuery}
						name="searchQuery"
					/>
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Near ..."
						aria-label=""
						onChange={this.onChange}
						defaultValue={searchLocation}
						name="searchLocation"
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
