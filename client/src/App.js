import React, { Fragment, useEffect } from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Routes from "./components/routes/Routes";
// import Location from "./components/location/Location";

import setAuthToken from "./utils/setAuthToken";

import store from "./redux";

import { loadUser } from "./redux/reducers/authReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
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
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes />
          <ToastContainer autoClose={5000} />
          {/* <Location /> */}
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
