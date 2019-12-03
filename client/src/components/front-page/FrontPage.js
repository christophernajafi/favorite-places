import React, { Fragment } from "react";
import { connect } from "react-redux";
import SearchBar from "../search-bar/SearchBar";
import SearchResults from "../search-results/SearchResults";
import "./front-page.css";
// import Logo from "../logo/Logo";
import PropTypes from "prop-types";

const FrontPage = props => {
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

FrontPage.propTypes = {
  searchResults: PropTypes.array
};

export default connect(mapStateToProps)(FrontPage);
