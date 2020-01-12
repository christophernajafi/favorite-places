import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";

import Map from "../map/Map";

// eslint-disable-next-line
const DUMMY_DATA_LISTS = [
  {
    id: 1,
    name: "My Favorite Museums in New York",
    description: "The Met, Whitney, and a few others",
    places: []
  },
  {
    id: 2,
    name: "My Favorite Cafes in Paris",
    description: "Les Deux Magots, et autres",
    places: []
  },
  {
    id: 3,
    name: "My Favorite Beaches ",
    description: "Rose Cove, Caspar",
    places: []
  }
];

const places = [{}];

// eslint-disable-next-line
const ListPage = props => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">List Page Title</h1>
        </div>
        {/* map over every place in list */}
        {/* display map showing marker for every place */}
        {places.length > 0 && <Map />}
        {!places.length && (
          <Alert variant={"primary"}>
            <div className="text-center">
              You currently have no places in this list.
            </div>
          </Alert>
        )}
      </div>
    </Fragment>
  );
};

export default ListPage;

/*
  Need ability to edit title and description
  Delete button with confirmation and redirect to my lists page
*/
