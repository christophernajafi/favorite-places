import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>Hello!</h1>
        <p>Welcome to my portfolio project!</p>
        <p>
          If you would like to see my other projects and learn more about me,
          please visit{" "}
          <a
            href="https://www.chrisnajafi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChrisNajafi.com
          </a>
          .
        </p>
      </Container>
    </Jumbotron>
  );
};

export default About;
