import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

// PrivateRoute is a custom component that behaves like Route, but only allows
// authenticated user to access it.
// It takes another component (dashboard here) as a parameter

const PrivateRoute = ({
  // Here component is the component parameter, Component is the actual Component react will display
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
  // console.log(Component);
  // if not logged in, go to login page
  // when logged in, isAuthenticated = true, loading = false
  if (!isAuthenticated && !loading) {
    return <Navigate to="/login" />;
  } else {
    // console.log(children);
    return <Component />;
    // return <>{Component}</>;
  }
};

PrivateRoute.propTypes = {
  auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
