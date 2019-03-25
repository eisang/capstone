import React, { Component } from "react";
// import logo from "./logo.svg";
import "antd/dist/antd.css";
// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./components/Routes";

import HeadNavbar from "./components/HeadNavbar";
// import { Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import HeadNavbar from "./components/HeadNavbar";
// import Project from "./components/Project";
// import RoommateList from "./components/RoommateList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HeadNavbar />
          <BaseRouter />
        </Router>
      </div>
    );
  }
}

export default App;
