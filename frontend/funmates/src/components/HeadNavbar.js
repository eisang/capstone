import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

class HeadNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="sm">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  exact
                  to="/"
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginRight: "40px"
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/events"
                  exact
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginRight: "40px"
                  }}
                >
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/tasks"
                  exact
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginRight: "40px"
                  }}
                >
                  Tasks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/roommates"
                  exact
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginRight: "40px"
                  }}
                >
                  Roommate
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeadNavbar;
