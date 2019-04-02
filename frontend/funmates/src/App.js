import React, { Component, Fragment } from "react";

// import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./components/Routes";
import "./App.css";
import {
  BrowserRouter as Router,
  // Route,
  Switch
  // Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import CartFooter from "./components/cart/CartFooter";

import store from "./components/store";

import HeadNavbar from "./components/HeadNavbar";

import { authStart } from "./components/actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(authStart());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Fragment>
              <HeadNavbar />
              <div className="container">
                <Switch>
                  <BaseRouter />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </div>
        <CartFooter copyright="footer" />
      </Provider>
    );
  }
}

export default App;
