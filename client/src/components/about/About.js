import React, { Fragment } from "react";
import { Container, Jumbotron } from "react-bootstrap";

import "./about.css";

const About = () => {
  return (
    <Fragment>
      <Container>
        <Jumbotron>
          <p>
            Favorite Places is a Single-Page Application that enables a user to
            search for venues, add them to a list, and view their locations on a
            map.
          </p>
          <p>
            If you would like to see my other projects, please visit{" "}
            <a
              href="https://www.chrisnajafi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChrisNajafi.com
            </a>
            .
          </p>
        </Jumbotron>
      </Container>
    </Fragment>
  );
};

export default About;
