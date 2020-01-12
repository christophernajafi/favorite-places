// eslint-disable-next-line
import React, { Fragment, useState, useEffect } from "react";
// eslint-disable-next-line
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import "./map.css";
import markerIcon from "./skateboarding.svg";
import * as parkDate from "./skateboard-parks.json";

// const parkDate = [];

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
  // const getViewCenter = () => {
  //   return [];
  // };

  const [selectedPark, setSelectedPark] = useState(null);

  // useEffect(() => {
  //   const [lat, long] = getViewCenter();
  //   setViewport({ latitude: lat, longitude: long });
  // }, []);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
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
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src={markerIcon} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </Fragment>
  );
};

export default Map;
