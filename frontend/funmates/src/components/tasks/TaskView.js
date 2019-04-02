import React from "react";
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";
import { Container, Row, Col } from "reactstrap";
import "./TasksStyle.css";

export default function TaskView() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="5">
            <TasksForm />
          </Col>

          <Col xs="7">
            <TasksList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
