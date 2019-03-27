import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { connect } from "react-redux";
import { addTask } from "../actions/tasks";

export class TaskForms extends Component {
  state = {
    task_name: "",
    is_task_completed: "",
    task_location: "",
    date_to_complete: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // handleChange(event) {
  //   const { name, value, type, checked } = event.target;
  //   type === "checkbox"
  //     ? this.setState({ [name]: checked })
  //     : this.setState({ [name]: value });
  // }

  onSubmit = e => {
    e.preventDefault();

    const {
      task_name,
      is_task_completed,
      task_location,
      date_to_complete
    } = this.state;
    const task = {
      task_name,
      is_task_completed,
      task_location,
      date_to_complete
    };
    this.props.addTask(task);
    this.setState({
      task_name: "",
      is_task_completed: "",
      task_location: "",
      date_to_complete: ""
    });
    // let data = this.state;
    // if (data[is_task_completed] === "true") {
    //   data["_task_completed"] = true;
    // } else {
    //   data["is_task_completed"] = false;
    // }
  };

  render() {
    const {
      task_name,
      is_task_completed,
      task_location,
      date_to_complete
    } = this.state;
    return (
      <div>
        {/* <p>Add tasks</p> */}
        <Form
          onSubmit={this.onSubmit}
          style={{
            // marginLeft: "10px",
            marginRight: "350px",
            width: "150px",
            marginTop: "90px"
          }}
        >
          <FormGroup>
            <Label for="exampleTheme">Task name</Label>
            <Input
              type="text"
              onChange={this.onChange}
              name="task_name"
              value={task_name}
              placeholder="enter your the theme"
            />
          </FormGroup>
          <FormGroup>
            {/* <Label for="exampleDate">status </Label> */}
            <Input
              style={{ marginLeft: 5 }}
              type="checkbox"
              // checked={this.state.is_task_completed}
              name="is_task_completed"
              value={is_task_completed}
              onChange={this.onChange}
              id="is_task_completed"
              placeholder="enter the status"
            />
            <Label for="exampleDate" style={{ marginLeft: 25 }}>
              status{" "}
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheck" check>
              location
            </Label>
            <Input
              type="text"
              name="task_location"
              value={task_location}
              onChange={this.onChange}
              placeholder="enter the location"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">date to complete</Label>
            <Input
              type="date"
              name="date_to_complete"
              value={date_to_complete}
              onChange={this.onChange}
              placeholder="enter the date"
            />
          </FormGroup>
          <Button type="secondary" htmltype="submit">
            submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(TaskForms);
