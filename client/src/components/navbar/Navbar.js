import React from "react";
import SearchBar from "../search-bar/SearchBar";
import { connect } from "react-redux";
import "./navbar.css";
import {
  Navbar,
  Nav,
  Form,
  // eslint-disable-next-line
  NavDropdown,
  // eslint-disable-next-line
  FormControl,
  // eslint-disable-next-line
  Button
} from "react-bootstrap";
// import { NavLink } from "react-router-dom";

/*
When logged out, user should see links for Log In and Sign Up
*/

/*
When logged in, user should see links for My Lists
*/

const Navbar2 = props => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Favorite Places</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#link">Log In</Nav.Link>
          <Nav.Link href="#link">Sign Up</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button> */}
          {props.searchResults.length ? <SearchBar /> : <div></div>}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults
  };
};

export default connect(mapStateToProps)(Navbar2);

// const Navbar = (props) => {
// 	return (
// 		<nav className="navbar navbar-expand navbar-light bg-light">
// 			{/* eslint-disable-next-line */}
// 			<a className="navbar-brand" href="#">
// 				Favorite Places
// 			</a>

// 			<div className="collapse navbar-collapse" id="navbarNav">
// 				<ul className="navbar-nav">
// 					<li className="nav-item">
// 						{props.searchResults.length ? <SearchBar /> : <div></div>}
// 					</li>
// 					<li className="nav-item">
// 						{/* eslint-disable-next-line */}
// 						<a className="nav-link" href="#">
// 							About
// 						</a>
// 					</li>
// 					<li className="nav-item">
// 						{/* <NavLink to={"/log-in"} className="nav-link">
// 							Log In
// 						</NavLink> */}
// 						{/* eslint-disable-next-line */}
// 						<a className="nav-link" href="#">
// 							Log In
// 						</a>
// 					</li>
// 					<li className="nav-item">
// 						{/* eslint-disable-next-line */}
// 						<a className="nav-link" href="#">
// 							Sign Up
// 						</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };
