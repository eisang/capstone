import React from "react";
import { Route } from "react-router-dom";
import RoommateList from "./RoommateList";
import RoommateDetails from "./RoommateDetails";
// import EventList from "./EventList";
// import EventDetails from "./EventDetails";
import EventView from "./events/EventView";
import TaskView from "./tasks/TaskView";
import BillView from "./bills/BillView";
import Home from "./Home";
// import HeadNavbar from "./components/HeadNavbar";

const BaseRouter = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/roommates" exact component={RoommateList} />
      <Route path="/roommates/:userID" exact component={RoommateDetails} />
      {/* <Route path="/events" exact component={EventList} /> */}
      <Route path="/events" exact component={EventView} />
      <Route path="/events/:id" exact component={EventView} />
      <Route path="/tasks" exact component={TaskView} />
      <Route path="/tasks/:id" exact component={TaskView} />
      <Route path="/bills" exact component={BillView} />

      {/* <Route path="/events/:userID" exact component={EventDetails} /> */}
    </div>
  );
};

export default BaseRouter;
