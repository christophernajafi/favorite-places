import React from "react";
import "./single-result.css";

const SingleSearchResult = (props) => {
	const { name, image_url, location, display_phone, is_closed } = props.result;
	const { display_address } = location;

	// console.log(typeof is_closed);

	return (
		<div>
			<img src={image_url} alt="" />
			<br />
			Name: {name}
			<br />
			Address: {display_address[0] + " " + display_address[1]}
			<br />
			Phone: {display_phone}
			<br />
			Open Right Now: {is_closed ? "No" : "Yes"}
		</div>
	);
};

export default SingleSearchResult;
