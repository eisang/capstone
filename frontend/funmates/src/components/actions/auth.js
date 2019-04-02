import axios from "axios";
import { errorMessages } from "./errors";

import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGIN,
  LOG_FAIL,
  AUTH_LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from "./actionTypes";

export const authStart = () => (dispatch, getState) => {
  dispatch({ type: AUTH_SUCCESS });

  axios

    .get(`http://127.0.0.1:8000/api/auth/user`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: AUTH_START,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(errorMessages(err.response.data, err.response.status));
      dispatch({
        type: AUTH_FAIL
      });
    });
};

export const login = (username, password) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, password });

  axios
    .post(`http://127.0.0.1:8000/api/auth/login`, body, config)
    .then(res => {
      dispatch({
        type: AUTH_LOGIN,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(errorMessages(err.response.data, err.response.status));
      dispatch({
        type: LOG_FAIL
      });
    });
};

export const register = ({ username, password, email }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password });

  axios

    .post(`http://127.0.0.1:8000/api/auth/register`, body, config)
    .then(res => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(errorMessages(err.response.data, err.response.status));
      dispatch({
        type: SIGNUP_FAIL
      });
    });
};

export const logout = () => (dispatch, getState) => {
  axios
    .post(`http://127.0.0.1:8000/api/auth/logout`, null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: AUTH_LOGOUT
      });
    })
    .catch(err => {
      dispatch(errorMessages(err.response.data, err.response.status));
    });
};

export const tokenConfig = getState => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
