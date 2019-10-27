import React from "react";

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
			<div>
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					></input>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
