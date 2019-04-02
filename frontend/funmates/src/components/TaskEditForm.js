import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateTask } from "./actions/tasks";

import { Button } from "reactstrap";

let TaskEditForm = props => {
  const { handleSubmit } = props;
  function editTask(values) {
    console.log("form values", values);

    props.updateTask(props.match.params.id, values);
  }

  return (
    <div className="col-md-5 m-auto">
      <div className="card card-body mt-5">
        <form onSubmit={handleSubmit(editTask)}>
          <div className="form-group">
            <label htmlFor="taskName">Task</label>
            <Field
              name="task_name"
              component="input"
              className="form-control"
              type="text"
              style={{ fontSize: "10px", marginTop: "-9px" }}
              placeholder="Update with the  new task"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="taskLocation">Location</label>
            <Field
              name="task_location"
              component="input"
              className="form-control"
              type="text"
              placeholder="Update with the new location"
              style={{ fontSize: "10px", marginTop: "-9px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="dateToComplete">Completed</label>
            <Field
              name="date_to_complete"
              component="input"
              className="form-control"
              type="date"
              placeholder="Update with new date"
              style={{ fontSize: "10px", marginTop: "-9px" }}
            />
          </div>

          <Button
            className="btn btn-secondary btn-sm"
            type="submit"
            style={{ marginRight: "18px" }}
          >
            Submit
          </Button>
          <Button className="btn btn-secondary btn-sm" href="/">
            Back
          </Button>
        </form>
      </div>
    </div>
  );
};

const mstp = (state, props) => {
  console.log("state mstp", state);
  return {
    initialValues: state.tasks.tasks.find(
      task => task.id === props.match.params.id
    )
  };
};

TaskEditForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(TaskEditForm);

export default connect(
  mstp,
  { updateTask }
)(TaskEditForm);
