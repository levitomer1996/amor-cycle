const initialState = {
  isLoggedIn: false,
  username: "",
  isAdmin: false,
  userId: "",
  articles: [],
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
        userId: action.payload[5],
      };
    case "SET_LOGOUT":
      return {
        ...state,
        username: "",
        isLogged: false,
        isAdmin: false,
        f_name: "",
        l_name: "",
      };
    case "SET_FEED":
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;
