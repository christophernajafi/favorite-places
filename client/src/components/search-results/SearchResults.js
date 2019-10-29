import React, { Component } from "react";
import SingleSearchResult from "./single-result/SingleSearchResult";
import axios from "axios";
class SearchResults extends Component {
	state = {
		results: []
	};

	getResults = async () => {
		try {
			const { data } = await axios.get("/api/yelp");
			console.log("Search Results: ", data);
			this.setState({ results: data.businesses });
		} catch (err) {
			console.log(err.message);
		}
	};

	componentDidMount() {
		this.getResults();
	}

	render() {
		return this.state.results.length ? (
			<div className="container mt-5">
				<ul className="list-group mb-4">
					{this.state.results.map((result) => (
						<li key={result.id} className="list-group-item">
							<SingleSearchResult result={result} />
						</li>
					))}
				</ul>
			</div>
		) : (
			<div></div>
		);
	}
}

export default SearchResults;
