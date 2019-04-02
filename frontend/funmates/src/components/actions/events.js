// import * as actionTypes from './eventAction'
import axios from "axios";
import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  UPDATE_EVENT
} from "./actionTypes";

// GET EVENTS
export const getEvents = () => dispatch => {
  axios
    .get(`http://127.0.0.1:8000/api/events/`)
    .then(res => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Delete Events

export const deleteEvent = id => dispatch => {
  axios
    .delete(`http://127.0.0.1:8000/api/events/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_EVENT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD Event

export const addEvent = event => dispatch => {
  axios
    .post(`http://127.0.0.1:8000/api/events/`, event)
    .then(res => {
      dispatch({
        type: ADD_EVENT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const updateEvent = (id, event) => dispatch => {
  console.log("update event", event);
  console.log("id", id);
  axios
    .put(`http://127.0.0.1:8000/api/events/${id}/`, event)
    .then(res => {
      dispatch({
        type: UPDATE_EVENT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
