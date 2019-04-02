import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateEvent } from "./actions/events";

let EventEditForm = props => {
  const { handleSubmit } = props;
  function editEvent(values) {
    console.log("form values", values);
    // You will call your action creator that will edi
    // the form here and pass the data into the action creator,
    // which will make the api call for you with all of the data
    props.updateEvent(values.id, values);
  }
  return (
    <form onSubmit={handleSubmit(editEvent)}>
      <div>
        <label htmlFor="eventTheme">Event theme</label>
        <Field name="event_theme" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="eventDate">Last Name</label>
        <Field name="event_date" component="input" type="date" />
      </div>

      {/* <button onClick={(handleSubmit => props.history.push(`/`)}>Submit</button> */}

      <button onClick={props.updateEvent} type="submit">
        Submit
      </button>
    </form>
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
