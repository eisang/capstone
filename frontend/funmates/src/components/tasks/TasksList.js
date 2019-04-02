import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks, deleteTask, updateTask } from "../actions/tasks";
import { Table, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { StaggeredMotion, spring } from "react-motion";

export class TasksList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    console.log("props.inTask", this.props.tasks);
    let clsName = "nav-container";
    if (this.props.show) {
      clsName = "nav-container open";
    }
    return (
      <div className="container">
        <StaggeredMotion
          defaultStyles={[{ x: 250 }, { x: 250 }, { x: 250 }, { x: 250 }]}
          styles={prevStyles => [
            { x: spring(0) },
            { x: spring(prevStyles[0].x) },
            { x: spring(prevStyles[1].x) },
            { x: spring(prevStyles[2].x) }
          ]}
        >
          {styles => (
            <nav className={clsName}>
              <Table
                style={{
                  transform: `translateX(${styles[3].x}px)`,
                  width: "540px",
                  marginTop: "55px",
                  right: "-95px",
                  position: "relative"
                }}
              >
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Location</th>
                    <th>Completed </th>

                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.tasks.map(task => (
                    <tr key={task.id}>
                      <td>{task.task_name}</td>
                      {/* <td>{"" + task.is_task_completed}</td> */}
                      <td>{task.task_location}</td>
                      <td>{task.date_to_complete}</td>
                      <td>
                        <span style={{ margin: "1px" }}>
                          <Button
                            onClick={this.props.deleteTask.bind(this, task.id)}
                            className="btn btn secondary btn-sm"
                          >
                            Delete
                          </Button>
                        </span>

                        <span style={{ margin: "15px" }}>
                          <Button
                            onClick={() =>
                              this.props.history.push(`/tasks/${task.id}/edit`)
                            }
                            // onClick={this.props.deleteTask.bind(this, task.id)}
                            className="btn  btn-sm"
                            style={{
                              backgroundColor: "#6eb19d",
                              border: "0px"
                            }}
                          >
                            Edit
                          </Button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </nav>
          )}
        </StaggeredMotion>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default withRouter(
  connect(
    mapStateToProps,
    { getTasks, deleteTask, updateTask }
  )(TasksList)
);
