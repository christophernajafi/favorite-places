import React, { Fragment } from "react";
import Map from "../../map/Map";

// eslint-disable-next-line
const DUMMY_MAP_DATA = [];

const ListItemPage = () => {
  return (
    <Fragment>
      <p>This page will contains a list of places.</p>
      <p>
        <Map />
      </p>
    </Fragment>
  );
};

export default ListItemPage;
