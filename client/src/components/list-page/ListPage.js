import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";

// eslint-disable-next-line
import ListPageItem from "../list-page-item/ListPageItem";
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
    description: "Ross Cove, Baker Beach",
    places: []
  }
];

const places = [
  {
    categories: "",
    coordinates: {
      latitude: "",
      longitude: ""
    },
    display_phone: "",
    image_url: "",
    location: "",
    name: "",
    rating: "",
    review_count: "",
    url: ""
  }
];

// eslint-disable-next-line
const ListPage = props => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">List Page Title</h1>
        </div>
        {/* Map over every place in list */}
        {/* {places.length > 0 &&
          places.map(place => (
            <li key={place.id} className="list-group-item">
              <ListPageItem place={place} />
            </li>
          ))} */}
        {/* Display map showing marker for every place */}
        {places.length > 0 && <Map />}
        {/* Display alert when there are no places in the list */}
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
