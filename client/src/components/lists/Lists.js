import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

import ListItem from "./lists-item/ListsItem";
import CreateListModal from "./create-list/CreateListModal";
import "./lists.css";

/*
Not authenticated should be redirected to log in page
*/

// const DUMMY_DATA_LISTS = [];
const DUMMY_DATA_LISTS = [
  {
    id: 1,
    name: "My Favorite Museums in New York",
    description: "The Met, Whitney, and a few others",
    places: []
  },
  {
    id: 2,
    name: "My Favorite Cafes in Paris",
    description: "Les Deux Magots, et autres",
    places: []
  },
  {
    id: 3,
    name: "My Favorite Beaches ",
    description: "Rose Cove, Caspar",
    places: []
  }
];

// eslint-disable-next-line
const Lists = props => {
  // const { isAuthenticated } = props;
  // if (!isAuthenticated) {
  //   return <Redirect to="/log-in" />;
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const lists = DUMMY_DATA_LISTS;

  return (
    <Fragment>
      <div className="container">
        <button className="btn btn-primary float-right" onClick={handleShow}>
          <i className="fas fa-plus"></i> Create List
        </button>
      </div>
      <div className="jumbotron">
        <h1 className="text-center">Lists</h1>
        {/* <p className="text-center">
          This page will display all lists belonging to a user.
        </p> */}
        <br />
        {!lists.length && (
          <Alert variant={"primary"}>
            <div className="text-center">You currently have no lists.</div>
          </Alert>
        )}
      </div>
      {lists.length > 0 && (
        <div className="container mt-5">
          <ul className="list-group mb-4">
            {lists.map(list => (
              <li key={list.id} className="list-group-item">
                <ListItem list={list} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <CreateListModal show={show} onHide={handleClose} />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

Lists.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps)(Lists);
