import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Spin, Icon } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const UtilityRoute = ({ component: Component, auth, ...component }) => (
  <Route
    {...component}
    render={props => {
      if (auth.loading) {
        return <Spin indicator={antIcon} />;
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(UtilityRoute);
