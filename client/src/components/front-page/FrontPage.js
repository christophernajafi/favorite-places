import React, { Fragment } from "react";
import { connect } from "react-redux";
import SearchBar from "../search-bar/SearchBar";
import SearchResults from "../search-results/SearchResults";
import "./front-page.css";

const FrontPage = (props) => {
	return (
		<Fragment>
			{props.searchResults.length ? (
				<SearchResults />
			) : (
				<div className="jumbotron">
					<div className="d-flex justify-content-center align-items-center">
						<SearchBar />
					</div>
				</div>
			)}
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		searchResults: state.search.searchResults
	};
};

export default connect(mapStateToProps)(FrontPage);
