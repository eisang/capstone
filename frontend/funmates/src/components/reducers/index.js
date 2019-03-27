import { combineReducers } from "redux";
import events from "./events";
import tasks from "./tasks";
import bills from "./bills";

export default combineReducers({
  events,
  tasks,
  bills
});
