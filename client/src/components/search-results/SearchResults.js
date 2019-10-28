import React from "react";
import SingleSearchResult from "./single-result/SingleSearchResult";

let results;
results = [];

// eslint-disable-next-line
const dummySearchResults = [
	{
		name: "King Pizza",
		image_url:
			"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG",
		display_address: "123 Sesame St, New York, NY",
		is_closed: "Open"
	},
	{
		name: "King Pizza",
		image_url:
			"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG",
		display_address: "123 Sesame St, New York, NY",
		is_closed: "Open"
	},
	{
		name: "King Pizza",
		image_url:
			"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG",
		display_address: "123 Sesame St, New York, NY",
		is_closed: "Open"
	},
	{
		name: "King Pizza",
		image_url:
			"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG",
		display_address: "123 Sesame St, New York, NY",
		is_closed: "Open"
	}
];

results = dummySearchResults;

const SearchResults = () => {
	console.log(results);
	return results.length ? (
		<div>
			<ul>
				{results.map((result) => (
					<li>
						<SingleSearchResult results={result} />
					</li>
				))}
			</ul>
		</div>
	) : (
		<div></div>
	);
};

export default SearchResults;
