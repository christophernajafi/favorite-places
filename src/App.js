import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SearchResults from "./components/search-results/SearchResults";

function App() {
	return (
		<Fragment>
			<Navbar />
			<SearchResults />
		</Fragment>
	);
}

export default App;
