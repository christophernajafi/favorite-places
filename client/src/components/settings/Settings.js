import React, { Fragment } from "react";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

/*
Not authenticated should be redirected to log in page
*/

const Settings = () => {
  // const { isAuthenticated } = props;
  // if (!isAuthenticated) {
  //   return <Redirect to="/log-in" />;
  // }

  return (
    <Fragment>
      <div className="jumbotron">
        Settings
        <br />
        Edit Profile
        <br />
        Change Password
      </div>
    </Fragment>
  );
};

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.isAuthenticated
//   };
// };

// export default connect(mapStateToProps)(Settings);
export default Settings;
