import React from "react";
// import SearchBar from "../search-bar/SearchBar";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light">
			{/* eslint-disable-next-line */}
			<a className="navbar-brand" href="#">
				Favorite Places
			</a>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						{/* eslint-disable-next-line */}
						<a className="nav-link" href="#">
							Login
						</a>
					</li>
					<li className="nav-item">
						{/* eslint-disable-next-line */}
						<a className="nav-link" href="#">
							Register
						</a>
					</li>
				</ul>
			</div>
			{/* <div>{<SearchBar />}</div> */}
		</nav>
	);
};

export default Navbar;
