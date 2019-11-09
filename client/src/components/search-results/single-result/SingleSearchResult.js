import React from "react";
import "./single-result.css";

const SingleSearchResult = (props) => {
	const {
		categories,
		display_phone,
		image_url,
		location,
		name,
		rating,
		review_count
		// url
	} = props.result;
	const { display_address } = location;

	// convert categories array to a string
	const categoryTitlesArr = categories.map((category) => category.title);
	const categoryTitles = categoryTitlesArr.join(", ");

	const displayAddress = display_address.join(", ");

	// console.log("url: ", url);

	return (
		<div>
			<img src={image_url} alt="" />
			<br />
			<span className="font-weight-bold">{name}</span>
			<br />
			{rating} ({review_count})
			<br />
			{categoryTitles}
			<br />
			{displayAddress}
			<br />
			{display_phone}
			<br />
		</div>
	);
};

export default SingleSearchResult;
