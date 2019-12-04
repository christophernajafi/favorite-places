import React from "react";
import { connect } from "react-redux";

import SearchResultsItem from "./search-results-item/SearchResultsItem";

const SearchResults = props => {
  const { searchResults } = props;
  return (
    searchResults.length && (
      <div className="container mt-5">
        <ul className="list-group mb-4">
          {searchResults.map(result => (
            <li key={result.id} className="list-group-item">
              <SearchResultsItem result={result} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults
  };
};

export default connect(mapStateToProps)(SearchResults);
