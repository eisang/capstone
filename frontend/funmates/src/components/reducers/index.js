import { combineReducers } from "redux";
import events from "./events";
import tasks from "./tasks";

import auth from "./auth";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  events,
  tasks,
  auth,
  form: formReducer
});
