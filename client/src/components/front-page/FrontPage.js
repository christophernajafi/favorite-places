import React, { Fragment } from "react";
import { connect } from "react-redux";
import SearchBar from "../search-bar/SearchBar";
import SearchResults from "../search-results/SearchResults";
import "./front-page.css";

const FrontPage = (props) => {
	return (
		<Fragment>
			{props.searchResults.length ? <SearchResults /> : <SearchBar />}
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		searchResults: state.search.searchResults
	};
};

export default connect(mapStateToProps)(FrontPage);
