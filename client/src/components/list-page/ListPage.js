import React, { Fragment } from "react";

// eslint-disable-next-line
const DUMMY_DATA_PLACES = [];

// eslint-disable-next-line
const ListPage = props => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">List Item</div>
        {/* map over every place in list */}
        {/* display map showing marker for every place */}
      </div>
    </Fragment>
  );
};

export default ListPage;

/*
  Need ability to edit title and description
  Delete button with confirmation and redirect to my lists page
*/
