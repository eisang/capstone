// import { GET_EVENTS, DELETE_EVENT, ADD_EVENT} from "../actions/types.js";
import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  UPDATE_EVENT
} from "../actions/actionTypes";

const initialState = {
  events: [],
  editEvent: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload)
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      };

    case UPDATE_EVENT:
      return {
        ...state,
        // events: state.events.map(event => event.id === action.payload)
        editEvent: action.payload
      };

    // case UPDATE_EVENT:
    //   return state.map(event => {
    //     if (event.id === action.id) {
    //       return {
    //         ...state
    //       };
    //     } else return event;
    //   });

    default:
      return state;
  }
}
