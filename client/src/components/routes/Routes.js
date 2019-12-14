import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FrontPage from "../front-page/FrontPage";
import About from "../about/About";
import LogIn from "../log-in/LogIn";
import SignUp from "../sign-up/SignUp";
import Lists from "../lists/Lists";
import Settings from "../settings/Settings";
import NotFoundPage from "../not-found-page/NotFoundPage";

/*
Authenticated: lists, settings; redirect to log-in
Not authenticated: log-in, sign-up
*/

// const allVisitorsRoutes=()={}
// const authRoutes=()=>{}
// const guestRoutes=()={}

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/log-in" component={LogIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/lists" component={Lists} />
      <Route exact path="/settings" component={Settings} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

/**
 * PROP TYPES
 */
Routes.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Routes);
// export default Routes;
