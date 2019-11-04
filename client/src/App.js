import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Location from "./components/location/Location";
import FrontPage from "./components/front-page/FrontPage";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<FrontPage />
			<Location />
		</Fragment>
	);
};

export default App;
