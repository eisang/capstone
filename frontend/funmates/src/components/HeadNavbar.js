import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "./actions/auth";
import { Button } from "reactstrap";

export class HeadNavbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authorizedLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <li className="nav-item">
          <Button
            onClick={this.props.logout}
            className="nav-link btn btn-sm btn-secondary"
            style={{ color: "white" }}
          >
            Logout
          </Button>
        </li>
      </ul>
    );

    const unauthorizedLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0 nav-link">
        <li className="nav-item" />
        <li className="nav-item">
          <Link style={{ color: "white" }} to="/login" className="nav-link" />
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            btn
            btn-secondary
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div>
            <p className="navbar-brand" style={{ color: "white" }}>
              TaskCompanion
            </p>
          </div>
          {isAuthenticated ? authorizedLinks : unauthorizedLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(HeadNavbar);
