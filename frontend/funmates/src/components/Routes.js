import React from "react";
import { Route } from "react-router-dom";
import EventView from "./events/EventView";
import TaskView from "./tasks/TaskView";
import UtilityRoute from "./utilities/UtilityRoute";
import Login from "./Login";
import Register from "./Register";
import EventEditForm from "./EventEditForm";
import TaskEditForm from "./TaskEditForm";

const BaseRouter = () => {
  return (
    <div>
      <div>
        <UtilityRoute path="/" exact component={EventView} />
      </div>
      <div>
        <UtilityRoute path="/" exact component={TaskView} />
      </div>
      <UtilityRoute path="/events/:id/edit" exact component={EventEditForm} />
      <UtilityRoute path="/tasks/:id/edit" exact component={TaskEditForm} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </div>
  );
};

export default BaseRouter;
