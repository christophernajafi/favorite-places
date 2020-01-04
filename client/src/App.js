import React, { Fragment, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
// import Location from "./components/location/Location";
import Routes from "./components/routes/Routes";
import Alerts from "./components/alerts/Alerts";

import setAuthToken from "./utils/setAuthToken";

import store from "./redux/index";

import { loadUser } from "./redux/reducers/authReducer";

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "mapbox-gl/dist/mapbox-gl.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Alerts />
      <Routes />
      {/* <Location /> */}
    </Fragment>
  );
};

export default App;
