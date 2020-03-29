import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchBar from "../search-bar/SearchBar";
import SearchResults from "../search-results/SearchResults";
import "./home-page.css";
// import Logo from "../logo/Logo";

const HomePage = props => {
  const { searchResults } = props;
  return (
    <Fragment>
      {searchResults.length ? (
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

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults
  };
};

HomePage.propTypes = {
  searchResults: PropTypes.array
};

export default connect(mapStateToProps)(HomePage);
