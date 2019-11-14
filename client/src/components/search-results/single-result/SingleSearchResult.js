import React from "react";
import "./single-result.css";

const SingleSearchResult = props => {
  const {
    categories,
    display_phone,
    image_url,
    location,
    name,
    rating,
    review_count,
    url
  } = props.result;
  const { display_address } = location;

  // convert categories array to a string
  const categoryTitlesArr = categories.map(category => category.title);
  const categoryTitles = categoryTitlesArr.join(", ");

  const displayAddress = display_address.join(", ");

  return (
    <div className="container">
      <div className="card resultCard">
        <div className="row">
          <div className="col-md-6">
            <div className="card-block">
              <div className="container">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">
                  {rating} ({review_count})
                  <br />
                  {categoryTitles}
                  <br />
                  {displayAddress}
                  <br />
                  {display_phone}
                </p>
                <a href={url} className="btn btn-primary" target="_blank">
                  Reviews
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="card-img-bottom" src={image_url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSearchResult;

// <div>
// 	<img src={image_url} alt="" />
// 	<br />
// 	<span className="font-weight-bold">{name}</span>
// 	<br />
// 	{rating} ({review_count})
// 	<br />
// 	{categoryTitles}
// 	<br />
// 	{displayAddress}
// 	<br />
// 	{display_phone}
// 	<br />
// </div>
