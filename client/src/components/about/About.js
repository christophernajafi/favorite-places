import React, { Fragment } from "react";
import "./about.css";

const About = () => {
	return (
		<Fragment>
			<div className="jumbotron">
				<p className="my-1">Hello! Welcome to my portfolio project.</p>
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
			</div>
		</Fragment>
	);
};

export default About;
