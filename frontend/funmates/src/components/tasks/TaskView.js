import React, { Fragment } from "react";
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";
import { Container, Row, Col } from "reactstrap";

export default function TaskView() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
