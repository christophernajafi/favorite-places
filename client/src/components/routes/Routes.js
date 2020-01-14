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
import PasswordReset from "../password-reset/PasswordReset";
import ListPage from "../list-page/ListPage";
import ChangePassword from "../change-password/ChangePassword";
import EditProfile from "../edit-profile/EditProfile";
import PrivacyAndSecurity from "../privacy-and-security/PrivacyAndSecurity";
import UserProfile from "../user-profile/UserProfile";

// const allVisitorsRoutes=()=>{}
// const guestOnlyRoutes=()=>{}
// const authOnlyRoutes=()=>{}

const Routes = props => {
  const { isAuthenticated } = props;

  // eslint-disable-next-line
  const GuestOnlyRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

  // eslint-disable-next-line
  const AuthOnlyRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/log-in" />
      }
    />
  );

  /*
  GuestOnlyRoute: log-in, sign-up; auth, redirects to home
  AuthOnlyRoute: lists, settings; !auth, redirects to log-in
*/

  return (
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/log-in" component={LogIn} /> */}
      <GuestOnlyRoute path="/log-in" component={LogIn} />
      {/* <Route exact path="/sign-up" component={SignUp} /> */}
      <GuestOnlyRoute path="/sign-up" component={SignUp} />
      <GuestOnlyRoute path="/password-reset" component={PasswordReset} />
      <Route exact path="/change-password" component={ChangePassword} />
      <Route exact path="/lists" component={Lists} />
      <Route exact path="/lists/:listId" component={ListPage} />
      {/* <AuthOnlyRoute exact path="/lists" component={Lists} /> */}
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/profile" component={UserProfile} />
      <Route
        exact
        path="/privacy-and-security"
        component={PrivacyAndSecurity}
      />
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
