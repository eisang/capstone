import React from "react";
import EventsForm from "./EventsForm";
import EventsList from "./EventsList";
import { Container, Row, Col } from "reactstrap";
import "./EventsStyle.css";

export default function EventView() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="6">
            <EventsForm />
          </Col>
          <Col className="exe" xs="6" style={{ display: "flex" }}>
            <EventsList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
