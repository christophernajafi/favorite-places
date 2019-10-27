import React from "react";

let results = [];
// let results = [0];
const dummySearchResults = [
	{
		name: "",
		description: "",
		urlPic: ""
	}
];

const SearchResults = () => {
	return results.length ? <div>RESULTS</div> : <div></div>;
};

export default SearchResults;
