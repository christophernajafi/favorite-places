import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Location from "./components/location/Location";
import Routes from "./components/routes/Routes";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Routes />
			<Location />
		</Fragment>
	);
};

export default App;
