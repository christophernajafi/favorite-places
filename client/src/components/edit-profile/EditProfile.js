import React, { Fragment } from "react";

import ImageUpload from "../image-upload/ImageUpload";

const EditProfile = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <div>
            <p>
              <ImageUpload />
            </p>
            <p>Name</p>
            <p>Website</p>
            <p>Bio</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProfile;
