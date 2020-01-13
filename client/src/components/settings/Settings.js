import React, { Fragment } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ImageUpload from "../image-upload/ImageUpload";

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
        <h4>Settings</h4>
        {/* Upload Profile Pic */}
        <ImageUpload />
        <br />
        Edit Profile
        <br />
        <Link to="/change-password">Change Password</Link>
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
