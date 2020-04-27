export const SET_LOGIN = (username, isAdmin, isLogged, f_name, l_name) => {
  return {
    type: "SET_LOGIN",
    payload: [username, isLogged, isAdmin, f_name, l_name],
  };
};

export const SET_LOGOUT = () => {
  return {
    type: "SET_LOGOUT",
    payload: "",
  };
};
