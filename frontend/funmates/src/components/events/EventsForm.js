import React, { Component } from "react";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { connect } from "react-redux";
import { addEvent } from "../actions/events";
import PropTypes from "prop-types";
import { StaggeredMotion, spring } from "react-motion";

class EventsForm extends Component {
  state = {
    event_theme: "",
    event_date: ""
  };

  static propTypes = {
    addEvent: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { event_theme, event_date } = this.state;
    const event = { event_theme, event_date };
    this.props.addEvent(event);
    this.setState({
      event_theme: "",
      event_date: ""
    });
  };
  render() {
    const { event_theme, event_date } = this.state;

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
                  transform: `translateX(${styles[1].x}px)`,
                  width: "200px",
                  marginTop: "28px",
                  marginBottom: "10px"
                }}
              >
                <FormGroup>
                  <Label
                    style={{ fontSize: "1em", marginTop: "0px" }}
                    for="exampleTheme"
                  >
                    Event
                  </Label>{" "}
                  <Input
                    type="text"
                    onChange={this.onChange}
                    name="event_theme"
                    value={event_theme}
                    style={{ fontSize: "10px", marginTop: "-12px" }}
                    placeholder="What do you plan on doing"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input
                    type="date"
                    name="event_date"
                    value={event_date}
                    onChange={this.onChange}
                    style={{ fontSize: "10px", marginTop: "-12px" }}
                    placeholder="Enter the date"
                  />
                </FormGroup>
                <Button className="btn-sm" type="secondary">
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
  { addEvent }
)(EventsForm);
