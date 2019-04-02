import React, { Component, Fragment } from "react";
// import Event from "./Event";
// import axios from "axios";
// import EventForm from "./EventForm";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { getEvents, deleteEvent, updateEvent } from "../actions/events";
import { Table, Button } from "reactstrap";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import EventsStyle from "./EventsStyle";
// import { CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom";

export class EventsList extends Component {
  state = {
    events: []
  };

  // static propTypes = {
  //   events: PropTypes.array.isRequired,
  //   getEvents: PropTypes.func.isRequired,
  //   deleteEvent: PropTypes.func.isRequired
  // };

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
        <Table
          style={{
            // transform: `translateX(${styles[1].x}px)`,
            width: "300px",
            marginTop: "10px"
            // marginBottom: "190px"
          }}
        >
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
                  <span style={{ margin: "4px" }}>
                    <Button
                      onClick={this.props.deleteEvent.bind(this, event.id)}
                      className="btn btn-secondary btn-sm"
                      // style={{ marginRight: "10px" }}
                    >
                      delete
                    </Button>
                  </span>
                  <span>
                    <Button
                      onClick={() =>
                        this.props.history.push(`/events/${event.id}/edit`)
                      }
                      className="btn btn-secondary btn-sm"
                      // style={{ marginLeft: "10px" }}
                    >
                      edit
                    </Button>
                  </span>
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

export default withRouter(
  connect(
    mapStateToProps,
    { getEvents, deleteEvent, updateEvent }
  )(EventsList)
);
