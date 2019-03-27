// import React, { Component } from "react";
// import ToggleBtn from "./components/ToggleBtn";
// import "./Home.css";
// import { Menu, Icon, Button } from "antd";
// import { Grid, Cell } from "react-mdl";

// import SocialMediaIcons from "react-social-media-icons";

// export default class Home extends Component {
//   static propTypes = {};
//   render() {
//     return (
//       <div className="heys">
//         <div
//           style={{
//             // marginTop: "30px",
//             marginLeft: "0px",
//             marginRight: "0px",
//             color: "red",
//             fontSize: "20px"
//           }}
//         >
//           <p>
//             {" "}
//             "One day in retrospect, the years of struggle will strike you as the
//             most beautiful"
//           </p>
//           <p>-Sigmund Freud</p>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

class Home extends Component {
  onSubmit = () => {
    this.props.history.push("/roommates");
  };

  render() {
    return (
      <div>
        <Form
          style={{
            marginLeft: "150px",
            marginRight: "340px",
            marginTop: "50px"
          }}
        >
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="enter your password"
            />
          </FormGroup>
          <Button type="secondary" htmlType="submit" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Home;
