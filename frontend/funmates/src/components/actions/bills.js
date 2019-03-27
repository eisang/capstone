// import * as actionTypes from './eventAction'
import axios from "axios";
import { GET_BILLS, DELETE_BILL, ADD_BILL } from "./actionTypes";

// GET BillS
export const getBills = () => dispatch => {
  axios
    .get(`http://127.0.0.1:8000/api/bills/`)
    .then(res => {
      dispatch({
        type: GET_BILLS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Delete Bills

export const deleteBill = id => dispatch => {
  axios
    .delete(`http://127.0.0.1:8000/api/bills/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_BILL,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD Bills

export const addBill = bill => dispatch => {
  axios
    .post(`http://127.0.0.1:8000/api/bills/`, bill)
    .then(res => {
      dispatch({
        type: ADD_BILL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
