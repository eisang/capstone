// import { Form, Input, Button } from "antd";
// import React, { Component } from "react";
// const FormItem = Form.Item;

//  export default class EventForm extends Component {
//     handleSubmit = event => {
//         event.preventDefault();
//         // const event_theme = event.target.elements.event_theme.value;
//         const event_theme = event.target.elements.event_theme.value;
//         const event_date = event.target.elements.event_date.value;
//         console.log(event_date, event_theme);
//       };

//   render() {
//     return (
//       <div>
//         <Form>
//           <FormItem label="Field A">
//             <Input placeholder="input placeholder" />
//           </FormItem>
//           <FormItem label="Field B">
//             <Input placeholder="input placeholder" />
//           </FormItem>
//           <FormItem>
//             <Button type="primary" htmlType="submit">Submit</Button>
//           </FormItem>
//         </Form>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";

export default class EventForm extends Component {
  handleSubmit = (event, requestMethod, userID) => {
    event.preventDefault();
    const event_theme = event.target.elements.event_theme.value;
    const event_date = event.target.elements.event_date.value;

    switch (requestMethod) {
      case "post":
        return axios
          .post(`http://127.0.0.1:8000/api/events/`, {
            event_theme: event_theme,
            event_date: event_date
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/events/${userID}`, {
            event_theme: event_theme,
            event_date: event_date
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleSubmit(
              event,
              this.props.requestMethod,
              this.props.userID
            )
          }
          style={{
            marginLeft: "150px",
            marginRight: "340px",
            marginTop: "50px"
          }}
        >
          <FormGroup>
            <Label for="exampleEmail">Theme</Label>
            <Input
              type="text"
              name="event_theme"
              id="EventTheme"
              placeholder="enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Dat</Label>
            <Input
              type="date"
              name="event_date"
              id="EventDate"
              placeholder="enter your password"
            />
          </FormGroup>
          <Button type="secondary" htmltype="submit">
            {this.props.btnText}
          </Button>
        </Form>
      </div>
    );
  }
}
