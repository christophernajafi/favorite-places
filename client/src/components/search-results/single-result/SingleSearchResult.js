import React from "react";
import "./single-result.css";

const SingleSearchResult = (props) => {
	const {
		name,
		image_url,
		location,
		display_phone,
		rating,
		review_count,
		categories
	} = props.result;
	const { display_address } = location;

	// convert array of categories to a string
	const m = categories.map((category) => category.title);
	const c = m.join(", ");

	return (
		<div>
			<img src={image_url} alt="" />
			<br />
			<span className="font-weight-bold">{name}</span>
			<br />
			{rating} ({review_count})
			<br />
			{c}
			<br />
			{display_address[0] + " " + display_address[1]}
			<br />
			{display_phone}
			<br />
		</div>
	);
};

export default SingleSearchResult;
