// eslint-disable-next-line
import React, { Fragment } from "react";
// eslint-disable-next-line
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = props => {
  return (
    <Fragment>
      <ReactMapGL
        mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
      ></ReactMapGL>
    </Fragment>
  );
};

export default Map;
