export const SET_LOGIN = (username, isAdmin, isLogged) => {
  return {
    type: "SET_LOGIN",
    payload: [username, isAdmin, isLogged],
  };
};
