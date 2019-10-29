import React from "react";
import SingleSearchResult from "./single-result/SingleSearchResult";
// import axios from "axios";

let results;
results = [];

// eslint-disable-next-line
const dummySearchResults = [
	{
		id: "1",
		name: "King Pizza",
		image_url:
			"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG",
		display_address: "123 Sesame St, New York, NY",
		is_closed: "Open"
	},
	{
		id: "2",
		name: "King Pizza",
		image_url:
			"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG",
		display_address: "123 Sesame St, New York, NY",
		is_closed: "Open"
	},
	{
		id: "3",
		name: "King Pizza",
		image_url:
			"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG",
		display_address: "123 Sesame St, New York, NY",
		is_closed: "Open"
	},
	{
		id: "4",
		name: "King Pizza",
		image_url:
			"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG",
		display_address: "123 Sesame St, New York, NY",
		is_closed: "Open"
	}
];

results = dummySearchResults;

const SearchResults = () => {
	return results.length ? (
		<div className="container mt-5">
			<ul className="list-group mb-4">
				{results.map((result) => (
					<li key={result.id} className="list-group-item">
						<SingleSearchResult result={result} />
					</li>
				))}
			</ul>
		</div>
	) : (
		<div></div>
	);
};

export default SearchResults;
