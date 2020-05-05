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
        f_name: action.payload[3],
        l_name: action.payload[4],
      };
    case "SET_LOGOUT":
      console.log("check");
      return {
        ...state,
        username: "",
        isLogged: false,
        isAdmin: false,
        f_name: "",
        l_name: "",
      };
    default:
      return state;
  }
}
export default reducer;
