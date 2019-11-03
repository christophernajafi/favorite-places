import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class SearchBar extends Component {
	state = {
		latitude: "40.712776",
		longitude: "-74.005974",
		searchTerms: "",
		searchLocation: "",
		results: []
	};

	getVenues = async () => {
		try {
			const { data } = await axios.get("/api/yelp", {
				params: {
					terms: this.state.searchTerms,
					location: this.state.searchLocation
				}
			});
			console.log("t: ", this.state.searchTerms);
			console.log("l: ", this.state.searchLocation);
			console.log("search bar: ", data);
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
		if (!this.state.searchTerms.length) {
			console.log("Please enter something");
		} else {
			this.getVenues();
			console.log("terms: ", this.state.searchTerms);
			console.log("location: ", this.state.searchLocation);
		}
	};

	// need to clear search bar after clicking submit

	render() {
		const { searchTerms, searchLocation } = this.state;
		return (
			<div>
				<form className="form-inline" onSubmit={this.onSubmit}>
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Find ..."
						aria-label=""
						onChange={this.onChange}
						defaultValue={searchTerms}
						name="searchTerms"
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

const mapStateToProps = (state) => {
	return {
		//
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);
// export default SearchBar;
