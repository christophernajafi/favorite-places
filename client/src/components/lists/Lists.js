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

// This page will contain a list of lists

// eslint-disable-next-line
const DUMMY_DATA_LISTS = [{}];

// eslint-disable-next-line
const Lists = props => {
  // const { isAuthenticated } = props;
  // if (!isAuthenticated) {
  //   return <Redirect to="/log-in" />;
  // }

  // eslint-disable-next-line
  const [show, setShow] = useState(false);

  // eslint-disable-next-line
  const handleClose = () => setShow(false);
  // eslint-disable-next-line
  const handleShow = () => setShow(true);

  // eslint-disable-next-line
  const handleOnClick = () => {
    console.log("click");
  };

  return (
    <Fragment>
      <div className="jumbotron">
        <button className="btn btn-primary" onClick={handleOnClick}>
          Create List
        </button>
        <br />
        This page will display a list of all lists
        <CreateListModal handleShow={handleShow} handleClose={handleClose} />
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
