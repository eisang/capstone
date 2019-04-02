import { GET_ERRORS } from "./actionTypes";

export const errorMessages = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
