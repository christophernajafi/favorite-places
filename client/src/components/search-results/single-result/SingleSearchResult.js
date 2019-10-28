import React from "react";

const SingleSearchResult = (props) => {
	const { name, image_url, display_address, is_closed } = props.results;

	return (
		<div>
			<img src={image_url} alt="" />
			<br />
			{name}
			<br />
			Address: {display_address}
			<br />
			Open: {is_closed}
		</div>
	);
};

export default SingleSearchResult;
