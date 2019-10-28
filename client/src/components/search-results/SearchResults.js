import React from "react";

let results;
results = [];
// results = dummySearchResults
// eslint-disable-next-line
const dummySearchResults = [
	{
		name: "",
		description: "",
		urlPic: ""
	}
];

// const resultReturn = {
// 	return (
// 		<ul>

// 		map.results(
// 			result=> {
// 				return (
// 					<li>{result}</li>
// 				)
// 			}
// 		)

// 		</ul>
// 	)
// }

const SearchResults = () => {
	return results.length ? <div>RESULTS</div> : <div></div>;
};

export default SearchResults;
