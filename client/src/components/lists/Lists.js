import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

// eslint-disable-next-line
import ListItem from "./lists-item/ListsItem";
import CreateListModal from "./create-list/CreateListModal";
import "./lists.css";

/*
Not authenticated should be redirected to log in page
*/

// eslint-disable-next-line
const DUMMY_DATA_LISTS = [];
// const DUMMY_DATA_LISTS = [{}];

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
      <div className="jumbotron">
        <p>This page will display all lists belonging to a user.</p>
        <button className="btn btn-primary" onClick={handleShow}>
          Create List
        </button>
        <br />
        <p></p>
        {!lists.length && (
          <Alert variant={"primary"}>You currently have no lists.</Alert>
        )}
      </div>
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
// export default Lists;

// eslint-disable-next-line
const printLists = () => {
  DUMMY_DATA_LISTS.map(list => (
    <div key={list.id}>
      <h3>{list.name}</h3>
      <p>{list.description}</p>
    </div>
  ));
};
