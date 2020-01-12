// eslint-disable-next-line
import React, { Fragment, useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import "./map.css";
import markerIcon from "./iconfinder_map-marker_299087.svg";
// import markerIcon from "./skateboarding.svg";
import * as parkDate from "./skateboard-parks.json";

// eslint-disable-next-line
const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: 40.7831,
    longitude: -73.9712,
    // latitude: 45.4211,
    // longitude: -75.6903,
    width: "50vw",
    height: "50vh",
    zoom: 10
  });

  // return average latitude and longitude of all markers
  // const getViewCenter = (coords) => {
  // const latitude
  // const longitude
  //   setViewport({latitude: '', longitude: ''})
  // };

  const [selectedPlace, setSelectedPlace] = useState(null);

  // useEffect(() => {
  //   const [lat, long] = getViewCenter();
  //   setViewport({ latitude: lat, longitude: long });
  // }, []);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPlace(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

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
        {parkDate.features.map(place => (
          <Marker
            key={place.properties.place_ID}
            latitude={place.geometry.coordinates[1]}
            longitude={place.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPlace(place);
              }}
            >
              <img src={markerIcon} alt="Marker Icon" />
            </button>
          </Marker>
        ))}

        {selectedPlace ? (
          <Popup
            latitude={selectedPlace.geometry.coordinates[1]}
            longitude={selectedPlace.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPlace(null);
            }}
          >
            <div>
              <h2>{selectedPlace.properties.NAME}</h2>
              <p>{selectedPlace.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </Fragment>
  );
};

export default Map;
