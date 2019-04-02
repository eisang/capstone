import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateEvent } from "./actions/events";
import { Button } from "reactstrap";

let EventEditForm = props => {
  const { handleSubmit } = props;
  function editEvent(values) {
    console.log("form values", values);
    // You will call your action creator that will edi
    // the form here and pass the data into the action creator,
    // which will make the api call for you with all of the data
    props.updateEvent(props.match.params.id, values);
  }

  return (
    <div className="col-md-5 m-auto">
      <div className="card card-body mt-5">
        <form onSubmit={handleSubmit(editEvent)}>
          <div className="form-group">
            <label htmlFor="eventTheme">Event</label>
            <Field
              name="event_theme"
              component="input"
              className="form-control"
              type="text"
              style={{ fontSize: "10px", marginTop: "-9px" }}
              placeholder="Update with the new task"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="eventDate">Date</label>
            <Field
              name="event_date"
              component="input"
              className="form-control"
              type="date"
              style={{ fontSize: "10px", marginTop: "-9px" }}
              placeholder="Update with the new date"
            />
          </div>

          <Button type="submit" style={{ marginRight: "8px" }}>
            Submit
          </Button>
          <Button href="/">back</Button>
        </form>
      </div>
    </div>
  );
};

const mstp = (state, props) => {
  console.log("state mstp", state);
  return {
    initialValues: state.events.events.find(
      ev => ev.id === props.match.params.id
    )
  };
};

EventEditForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(EventEditForm);

export default connect(
  mstp,
  { updateEvent }
)(EventEditForm);
