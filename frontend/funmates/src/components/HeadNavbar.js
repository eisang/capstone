// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

// class HeadNavbar extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   static propTypes = {
//     auth: PropTypes.object.isRequired,
//     logout: PropTypes.func.isRequired
//   };
//   render() {
//     const { isAuthenticated, user } = this.props.auth;

//   const authLinks  = (
//     <Nav className="ml-auto" navbar>
//     <NavItem>
//       <NavLink >
//         <Button>
//           logout
//         </Button>
//       </NavLink>
//       </NavItem>
//       </Nav>
//   );

//      const guestLinks = (
//        <Nav className="ml-auto" navbar>
//       <NavItem>
//         <NavLink to ='/login'>
//            Login
//         </NavLink>
//         </NavItem>
//         <NavItem>
//          <NavLink to='/register'>
//            Register
//          </NavLink>
//          </NavItem>
//          </Nav>

//      )

//     return (
//       <div>
//         <Navbar color="primary" light expand="sm">
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink
//                   exact
//                   to="/login"
//                   style={{
//                     color: "white",
//                     textAlign: "center",
//                     marginRight: "40px"
//                   }}
//                 >
//                   Login
//                 </Nav>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   to="/register"
//                   exact
//                   style={{
//                     color: "white",
//                     textAlign: "center",
//                     marginRight: "40px"
//                   }}
//                 >
//                   Register
//                 </NavLink>
//               </NavItem>
//               {/* <NavItem>
//                 <NavLink
//                   to="/tasks"
//                   exact
//                   style={{
//                     color: "white",
//                     textAlign: "center",
//                     marginRight: "40px"
//                   }}
//                 >
//                   Tasks
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   to="/roommates"
//                   exact
//                   style={{
//                     color: "white",
//                     textAlign: "center",
//                     marginRight: "40px"
//                   }}
//                 >
//                   Roommate
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   to="/bills"
//                   exact
//                   style={{
//                     color: "white",
//                     textAlign: "center",
//                     marginRight: "40px"
//                   }}
//                 >
//                   Bills
//                 </NavLink>
//               </NavItem> */}
//             </NavItem>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default HeadNavbar;

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

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <li className="nav-item">
          <Button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light"
          >
            Logout
          </Button>
        </li>
      </ul>
    );

    const guestLinks = (
      // <nav>
      //   <div className="hamburger">
      //     <div className="line" />
      //     <div className="line" />
      //   </div>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0 nav-link">
        <li className="nav-item">
          {/* <Link style={{ color: "white" }} to="/register" className="nav-link">
            Signup
          </Link> */}
        </li>
        <li className="nav-item">
          <Link style={{ color: "white" }} to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
      // </nav>
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
          {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Lead Manager
            </a>
          </div> */}
          {isAuthenticated ? authLinks : guestLinks}
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
