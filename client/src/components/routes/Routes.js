import React from "react";
import { Switch, Route } from "react-router-dom";

import FrontPage from "../front-page/FrontPage";
import About from "../about/About";
import LogIn from "../log-in/LogIn";
import SignUp from "../sign-up/SignUp";
import Lists from "../lists/Lists";
import NotFoundPage from "../not-found-page/NotFoundPage";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={FrontPage} />
			<Route exact path="/about" component={About} />
			<Route exact path="/log-in" component={LogIn} />
			<Route exact path="/sign-up" component={SignUp} />
			<Route exact path="/lists" component={Lists} />
			<Route component={NotFoundPage} />
		</Switch>
	);
};

export default Routes;
