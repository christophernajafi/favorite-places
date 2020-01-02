import React, { Fragment } from "react";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import PropTypes from "prop-types";

// eslint-disable-next-line
import List from "./list-item-page/ListItemPage";
import "./lists.css";

/*
Not authenticated should be redirected to log in page
*/

const Lists = () => {
  // const { isAuthenticated } = props;
  // if (!isAuthenticated) {
  //   return <Redirect to="/log-in" />;
  // }

  return (
    <Fragment>
      <div className="jumbotron">Lists</div>
    </Fragment>
  );
};

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.isAuthenticated
//   };
// };

// Lists.propTypes = {
//   isAuthenticated: PropTypes.bool
// };

// export default connect(mapStateToProps)(Lists);
export default Lists;
