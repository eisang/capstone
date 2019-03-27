// import * as actionTypes from './eventAction'
import axios from "axios";
import { GET_TASKS, DELETE_TASK, ADD_TASK } from "./actionTypes";

// GET Tasks
export const getTasks = () => dispatch => {
  axios
    .get(`http://127.0.0.1:8000/api/tasks/`)
    .then(res => {
      dispatch({
        type: GET_TASKS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Delete Tasks

export const deleteTask = id => dispatch => {
  axios
    .delete(`http://127.0.0.1:8000/api/tasks/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD Task

export const addTask = task => dispatch => {
  console.log(task);
  task.is_task_completed = false;
  axios
    .post(`http://127.0.0.1:8000/api/tasks/`, task)
    .then(res => {
      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
