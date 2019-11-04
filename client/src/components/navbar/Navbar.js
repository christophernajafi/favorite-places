import React from "react";
import SearchBar from "../search-bar/SearchBar";
import { connect } from "react-redux";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light">
			{/* eslint-disable-next-line */}
			<a className="navbar-brand" href="#">
				Favorite Places
			</a>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						{props.searchResults.length ? <SearchBar /> : <div></div>}
					</li>
					<li className="nav-item">
						{/* eslint-disable-next-line */}
						<a className="nav-link" href="#">
							Log In
						</a>
					</li>
					<li className="nav-item">
						{/* eslint-disable-next-line */}
						<a className="nav-link" href="#">
							Sign Up
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		searchResults: state.search.searchResults
	};
};

export default connect(mapStateToProps)(Navbar);
