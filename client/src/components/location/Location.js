import React, { Component } from "react";

// convert to function

class Location extends Component {
  state = {
    latitude: "",
    longitude: ""
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(response => {
      const { latitude, longitude } = response.coords;
      this.setState({ latitude, longitude });
      // console.log("Your current location is", this.state);
    });
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <div></div>;
  }
}

export default Location;
