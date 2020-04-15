const initialState = {
  isLoggedIn: false,
  username: "",
  isAdmin: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        username: action.payload[0],
        isLogged: action.payload[1],
        isAdmin: action.payload[2],
      };

    default:
      return state;
  }
}
export default reducer;
