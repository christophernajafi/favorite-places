import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SearchResults from "./components/search-results/SearchResults";
// import SearchBar from "./components/search-bar/SearchBar";
import Location from "./components/location/Location";

function App() {
	return (
		<Fragment>
			<Navbar />
			<SearchResults />
			<Location />
		</Fragment>
	);
}

export default App;
