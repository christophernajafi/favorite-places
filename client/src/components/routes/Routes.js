import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FrontPage from "../front-page/FrontPage";
import About from "../about/About";
import LogIn from "../log-in/LogIn";
import SignUp from "../sign-up/SignUp";
import Lists from "../lists/Lists";
import Settings from "../settings/Settings";
import NotFoundPage from "../not-found-page/NotFoundPage";

// const allVisitorsRoutes=()=>{}
// const guestOnlyRoutes=()=>{}
// const authOnlyRoutes=()=>{}

const Routes = props => {
  const { isAuthenticated } = props;

  // <PrivateRoute path='/name-of-path' component={NameOfComponent} />
  // eslint-disable-next-line
  const AuthOnlyRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/log-in",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  // eslint-disable-next-line
  const GuestOnlyRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  /*
  GuestOnlyRoute: log-in, sign-up; redirect to home
  AuthOnlyRoute: lists, settings; redirect to log-in
*/

  return (
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/log-in" component={LogIn} /> */}
      <GuestOnlyRoute path="/log-in" component={LogIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/lists" component={Lists} />
      {/* <AuthOnlyRoute exact path="/lists" component={Lists} /> */}
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
