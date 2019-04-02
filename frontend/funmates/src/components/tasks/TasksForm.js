import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { connect } from "react-redux";
import { addTask } from "../actions/tasks";
import { StaggeredMotion, spring } from "react-motion";

export class TaskForms extends Component {
  state = {
    task_name: "",
    is_task_completed: "",
    task_location: "",
    date_to_complete: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

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
  };

  render() {
    const {
      task_name,
      // is_task_completed,
      task_location,
      date_to_complete
    } = this.state;

    let clsName = "nav-container";
    if (this.props.show) {
      clsName = "nav-container open";
    }

    return (
      <div className="container">
        <StaggeredMotion
          defaultStyles={[{ x: -1250 }, { x: -250 }, { x: -250 }, { x: -200 }]}
          styles={prevStyles => [
            { x: spring(0) },
            { x: spring(prevStyles[0].x) },
            { x: spring(prevStyles[1].x) },
            { x: spring(prevStyles[2].x) }
          ]}
        >
          {styles => (
            <nav className={clsName}>
              <Form
                onSubmit={this.onSubmit}
                body
                style={{
                  transform: `translateX(${styles[3].x}px)`,
                  width: "200px",
                  marginTop: "40px",
                  marginBottom: "60px"
                }}
              >
                <FormGroup>
                  <Label for="exampleTheme">Task</Label>
                  <Input
                    type="text"
                    onChange={this.onChange}
                    name="task_name"
                    value={task_name}
                    style={{ fontSize: "10px", marginTop: "-9px" }}
                    placeholder="Enter your the theme"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleCheck" check>
                    Location
                  </Label>
                  <Input
                    type="text"
                    name="task_location"
                    value={task_location}
                    onChange={this.onChange}
                    style={{ fontSize: "10px", marginTop: "-4px" }}
                    placeholder="Enter the location"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Completed</Label>
                  <Input
                    type="date"
                    name="date_to_complete"
                    value={date_to_complete}
                    onChange={this.onChange}
                    style={{ fontSize: "10px", marginTop: "-9px" }}
                    placeholder="Enter the date"
                  />
                </FormGroup>
                <Button className="btn-sm" type="secondary" htmltype="submit">
                  Submit
                </Button>
              </Form>
            </nav>
          )}
        </StaggeredMotion>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(TaskForms);
