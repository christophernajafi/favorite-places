import React from "react";
import { connect } from "react-redux";
import SingleSearchResult from "./single-result/SingleSearchResult";

const SearchResults = (props) => {
	return props.searchResults.length ? (
		<div className="container mt-5">
			<ul className="list-group mb-4">
				{props.searchResults.map((result) => (
					<li key={result.id} className="list-group-item">
						<SingleSearchResult result={result} />
					</li>
				))}
			</ul>
		</div>
	) : (
		<div></div>
	);
};

const mapStateToProps = (state) => {
	return {
		searchResults: state.search.searchResults
	};
};

export default connect(mapStateToProps)(SearchResults);
