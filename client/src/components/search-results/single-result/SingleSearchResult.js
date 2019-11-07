import React from "react";
import "./single-result.css";

const SingleSearchResult = (props) => {
	const { name, image_url, location, display_phone } = props.result;
	const { display_address } = location;

	// console.log(typeof is_closed);

	return (
		<div>
			<img src={image_url} alt="" />
			<br />
			<span className="font-weight-bold">{name}</span>
			<br />
			{display_address[0] + " " + display_address[1]}
			<br />
			{display_phone}
			<br />
		</div>
	);
};

export default SingleSearchResult;
