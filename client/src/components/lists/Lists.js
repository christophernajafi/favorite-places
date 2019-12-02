import React, { Fragment } from "react";
import "./lists.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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

export default connect(mapStateToProps)(Lists);
