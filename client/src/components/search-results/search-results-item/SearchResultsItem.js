import React from "react";
import Rater from "react-rater";

import "react-rater/lib/react-rater.css";
import "./search-results-item.css";

const SearchResultsItem = props => {
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
                <div className="card-text">
                  {rating}{" "}
                  <Rater rating={rating} total={5} interactive={false} /> (
                  {review_count})
                  <br />
                  {categoryTitles}
                  <br />
                  {displayAddress}
                  <br />
                  {display_phone}
                </div>
                <a
                  href={url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reviews
                </a>
                <button className="btn btn-warning">Save</button>
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

export default SearchResultsItem;
