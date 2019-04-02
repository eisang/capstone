import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, deleteEvent, updateEvent } from "../actions/events";
import { Table, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { StaggeredMotion, spring } from "react-motion";

export class EventsList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    let clsName = "nav-container";
    if (this.props.show) {
      clsName = "nav-container open";
    }

    return (
      <div className="container">
        <StaggeredMotion
          defaultStyles={[{ x: 250 }, { x: 250 }, { x: 250 }, { x: 200 }]}
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

                  width: "550px",
                  marginTop: "30px"
                }}
              >
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.events.map(event => (
                    <tr key={event.id}>
                      <td>{event.event_theme}</td>
                      <td>{event.event_date}</td>
                      <td />
                      <td />

                      <td style={{ margin: "8px" }}>
                        <span style={{ margin: "14px" }}>
                          <Button
                            onClick={this.props.deleteEvent.bind(
                              this,
                              event.id
                            )}
                            className="btn btn-secondary btn-sm"
                            // style={{ marginRight: "10px" }}
                          >
                            Delete
                          </Button>
                        </span>
                        <span>
                          <Button
                            onClick={() =>
                              this.props.history.push(
                                `/events/${event.id}/edit`
                              )
                            }
                            className="btn btn-sm"
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
  events: state.events.events
});

export default withRouter(
  connect(
    mapStateToProps,
    { getEvents, deleteEvent, updateEvent }
  )(EventsList)
);
