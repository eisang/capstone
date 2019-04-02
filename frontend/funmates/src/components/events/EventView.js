import React from "react";
import EventsForm from "./EventsForm";
import EventsList from "./EventsList";
import { Container, Row, Col } from "reactstrap";

export default function EventView() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="6">
            <EventsForm />
          </Col>
          <Col xs="6">
            <EventsList />
          </Col>

          {/* <EventsForm />
    
      <EventsList /> */}
        </Row>
      </Container>
    </div>
  );
}
