import React, { Fragment } from "react";

import Navbar from "./components/navbar/Navbar";
import Location from "./components/location/Location";
import Routes from "./components/routes/Routes";
import Alerts from "./components/alerts/Alerts";

import setAuthToken from "./utils/setAuthToken";

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Alerts />
      <Routes />
      <Location />
    </Fragment>
  );
};

export default App;
