const initialState = {
  isLoggedIn: false,
  username: "",
  isAdmin: true,
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

    default:
      return state;
  }
}
export default reducer;
