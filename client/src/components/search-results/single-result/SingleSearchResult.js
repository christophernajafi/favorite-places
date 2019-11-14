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

  console.log("url: ", url);

  return (
    <div class="container">
      <div class="card resultCard">
        <div class="row">
          <div class="col-md-6">
            <div class="card-block">
              <div className="container">
                <h4 class="card-title">{name}</h4>
                <p class="card-text">
                  {rating} ({review_count})
                  <br />
                  {categoryTitles}
                  <br />
                  {displayAddress}
                  <br />
                  {display_phone}
                </p>
                <a href="{url}" class="btn btn-primary" target="_blank">
                  Reviews
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img class="card-img-bottom" src={image_url} alt="" />
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
