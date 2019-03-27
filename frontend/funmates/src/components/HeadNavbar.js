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
              <NavItem>
                <NavLink
                  to="/bills"
                  exact
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginRight: "40px"
                  }}
                >
                  Bills
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

// import React from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from "react-router-dom";
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// function HeadNavbar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//             Menu
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// HeadNavbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(HeadNavbar);

// import React, { Component } from "react";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

// import React, { Component } from "react";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
// import { Link } from "react-router-dom";

// export default class HeadNavbar extends Component {
//   render() {
//     return (
//       <div>
//         <Layout>
//           <Header
//             // className="header-color"
//             title={
//               <Link style={{ textDecoration: "none", color: "white" }} to="/">
//                 MyPortfolio
//               </Link>
//             }
//             scroll
//           >
//             <Navigation>
//               <Link to="/resume">Resume</Link>
//               <Link to="/aboutme">About Me</Link>
//               <Link to="/projects">Projects</Link>
//               <Link to="/contact">Contact</Link>
//             </Navigation>
//           </Header>
//           <Drawer
//             title={
//               <Link style={{ textDecoration: "none", color: "black" }} to="/">
//                 MyPortfolio
//               </Link>
//             }
//           >
//             <Navigation>
//               <Link to="/resume">Resume</Link>
//               <Link to="/aboutme">About Me</Link>
//               <Link to="/projects">Projects</Link>
//               <Link to="/contact">Contact</Link>
//             </Navigation>
//           </Drawer>
//           <Content>
//             <div className="page-content" />
//             {/* <Main /> */}
//           </Content>
//         </Layout>
//       </div>
//     );
//   }
// }
