import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchResults } from "../../redux/reducers/searchResultsReducer";

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
    if (!this.state.searchTerms.length) {
      console.log("Please enter something");
    } else {
      this.props.getSearchResults(
        this.state.searchTerms,
        this.state.searchLocation
      );
      // console.log("terms: ", this.state.searchTerms);
      // console.log("location: ", this.state.searchLocation);
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

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchResults: (terms, location) =>
      dispatch(getSearchResults(terms, location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
