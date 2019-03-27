import React, { Component, Fragment } from "react";
// import Event from "./Event";
// import axios from "axios";
// import EventForm from "./EventForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents, deleteEvent } from "../actions/events";
import { Table, Button } from "reactstrap";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import EventsStyle from "./EventsStyle";
// import { CSSTransition } from "react-transition-group";

export class EventsList extends Component {
  state = {
    events: []
  };

  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    // const transitionOptions = {
    //   trasnstionName: "fade",
    //   transitionEnterTimeout: 500,
    //   transitionLeaveTimeout: 500
    // };
    return (
      <Fragment>
        <h5>events</h5>
        <Table hover>
          <thead>
            <tr>
              <th>event_theme</th>
              <th>event_date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {/* <CSSTransition {...transitionOptions}> */}
            {this.props.events.map(event => (
              <tr key={event.id}>
                <td>{event.event_theme}</td>
                <td>{event.event_date}</td>
                <td>
                  <Button
                    onClick={this.props.deleteEvent.bind(this, event.id)}
                    className="btn btn danger btn-sm"
                  >
                    delete
                  </Button>
                </td>
              </tr>
            ))}
            {/* </CSSTransition> */}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.events
});

export default connect(
  mapStateToProps,
  { getEvents, deleteEvent }
)(EventsList);
