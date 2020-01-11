import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import { getSearchResults } from "../../redux/reducers/searchResultsReducer";

// convert to function

class SearchBar extends Component {
  state = {
    searchTerms: "",
    searchLocation: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { searchTerms, searchLocation } = this.state;
    const { getSearchResults } = this.props;
    if (!searchTerms.length) {
      toast.warn("Please enter a search term.", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else if (!searchLocation) {
      toast.warn("Please enter a location.", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      getSearchResults(searchTerms, searchLocation);
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
            name="searchTerms"
            defaultValue={searchTerms}
          />
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Near ..."
            aria-label=""
            onChange={this.onChange}
            name="searchLocation"
            defaultValue={searchLocation}
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

const mapDispatchToProps = dispatch => {
  return {
    getSearchResults: (terms, location) =>
      dispatch(getSearchResults(terms, location))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
