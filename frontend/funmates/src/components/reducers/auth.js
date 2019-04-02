import {
  //   USER_LOADED,
  //   USER_LOADING,
  //   AUTH_ERROR,
  //   LOGIN_SUCCESS,
  //   LOGIN_FAIL,
  //   LOGOUT_SUCCESS,
  //   REGISTER_SUCCESS,
  //   REGISTER_FAIL,

  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGIN,
  LOG_FAIL,
  AUTH_LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case AUTH_LOGIN:
    case SIGNUP_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case AUTH_FAIL:
    case LOG_FAIL:
    case AUTH_LOGOUT:
    case SIGNUP_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
