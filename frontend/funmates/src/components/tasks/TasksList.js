import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTasks, deleteTask } from "../actions/tasks";
import { Table, Button } from "reactstrap";

export class TasksList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    console.log("props.inTask", this.props.tasks);
    return (
      <Fragment>
        {/* <h5>Tasks</h5> */}
        <Table
          style={{
            // transform: `translateX(${styles[1].x}px)`,
            width: "500px",
            marginTop: "10px",
            marginRight: "300px"
            // marginBottom: "190px"
          }}
        >
          <thead>
            <tr>
              <th>task_name</th>
              <th>is_task_completed</th>
              <th>task_location</th>
              <th>date_to_complete</th>

              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map(task => (
              <tr key={task.id}>
                <td>{task.task_name}</td>
                <td>{"" + task.is_task_completed}</td>
                <td>{task.task_location}</td>
                <td>{task.date_to_complete}</td>
                <td>
                  <span style={{ margin: "4px" }}>
                    <Button
                      onClick={this.props.deleteTask.bind(this, task.id)}
                      className="btn btn secondary btn-sm"
                    >
                      delete
                    </Button>
                  </span>

                  <span style={{ margin: "4px" }}>
                    <Button
                      onClick={this.props.deleteTask.bind(this, task.id)}
                      className="btn btn secondary btn-sm"
                    >
                      edit
                    </Button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(
  mapStateToProps,
  { getTasks, deleteTask }
)(TasksList);
