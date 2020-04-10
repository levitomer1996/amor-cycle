import { SET_LOGGED } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  username: "",
  isAdmin: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED:
      return {
        ...state,
        isAdmin: action.payload[1],
        isLoggedIn: action.payload[0],
        username: action.payload[2],
      };

    default:
      return state;
  }
}
