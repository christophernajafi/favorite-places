import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

import ImageUpload from "../image-upload/ImageUpload";

// eslint-disable-next-line
const UserProfile = props => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <ImageUpload />
          <p />
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          {/* <Link to="/edit-profile">Edit Profile</Link> */}
          <Button variant="primary" type="submit" href="/edit-profile">
            Edit Profile
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
