import React, { Fragment } from "react";
import "./lists.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

/*
Not authenticated should be redirected to log in page
*/

const Lists = props => {
  const { isAuthenticated } = props;
  if (!isAuthenticated) {
    return <Redirect to="/log-in" />;
  }

  return (
    <Fragment>
      <div className="jumbotron">Lists</div>
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
