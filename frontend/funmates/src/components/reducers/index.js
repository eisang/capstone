import { combineReducers } from "redux";
import events from "./events";
import tasks from "./tasks";
// import errors from "./errors";
import auth from "./auth";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  events,
  tasks,
  // bills
  auth,
  form: formReducer
});
