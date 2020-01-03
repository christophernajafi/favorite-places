import React, { useState, useEffect } from "react";

const Location = () => {
  // eslint-disable-next-line
  const [latitude, setLatitude] = useState(null);
  // eslint-disable-next-line
  const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(response => {
      const { latitude, longitude } = response.coords;
      setLatitude(latitude);
      setLongitude(longitude);
      // console.log("Your current location is", latitude, longitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return <div></div>;
};

export default Location;
