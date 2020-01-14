import React, { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";

import ImageUpload from "../image-upload/ImageUpload";

const EditProfile = props => {
  // eslint-disable-next-line
  const [formState, setFormState] = useState({
    name: "",
    website: "",
    bio: "",
    email: ""
  });

  const { name, website, bio, email } = formState;

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line
    props.history.push("/profile");
    // console.log("formState: ", formState);
  };

  const cancel = () => {
    // eslint-disable-next-line
    props.history.push("/profile");
  };

  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <ImageUpload />
          <p />
          <form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                type="text"
                placeholder="Enter name"
                onChange={handleChange}
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                value={website}
                type="text"
                placeholder="Enter website"
                onChange={handleChange}
                name="website"
              />
            </Form.Group>
            <Form.Group controlId="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                value={bio}
                type="text"
                placeholder="Enter bio"
                onChange={handleChange}
                name="bio"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="Enter email address"
                onChange={handleChange}
                name="email"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="secondary" type="button" onClick={cancel}>
              Cancel
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProfile;
