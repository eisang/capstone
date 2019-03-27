import React, { Component } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./components/Routes";
import "./App.css";
import { Provider } from "react-redux";

import store from "./components/store";

import HeadNavbar from "./components/HeadNavbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <HeadNavbar />
            <div className="container">
              <BaseRouter />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.token !== null
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
