import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line
import ListItem from "./lists-item/ListsItem";
import CreateListModal from "./create-list/CreateListModal";
import "./lists.css";

/*
Not authenticated should be redirected to log in page
*/

// eslint-disable-next-line
const DUMMY_DATA_LISTS = [{}];

// eslint-disable-next-line
const Lists = props => {
  // const { isAuthenticated } = props;
  // if (!isAuthenticated) {
  //   return <Redirect to="/log-in" />;
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="jumbotron">
        <button className="btn btn-primary" onClick={handleShow}>
          Create List
        </button>
        <br />
        This page will display all lists belonging to a user.
        <CreateListModal show={show} onHide={handleClose} />
      </div>
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
