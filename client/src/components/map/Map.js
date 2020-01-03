// eslint-disable-next-line
import React, { Fragment, useState, useEffect } from "react";
// eslint-disable-next-line
import ReactMapGL, { Marker, Popup } from "react-map-gl";

// eslint-disable-next-line
const Map = props => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <Fragment>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {/* map over an array of markers */}
        <Marker>
          <div></div>
        </Marker>
      </ReactMapGL>
    </Fragment>
  );
};

export default Map;
