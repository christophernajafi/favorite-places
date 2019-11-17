import React, { Fragment } from "react";
// import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Location from "./components/location/Location";
import Routes from "./components/routes/Routes";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Alerts from "./components/alerts/Alerts";
import setAuthToken from "./utils/setAuthToken";

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
