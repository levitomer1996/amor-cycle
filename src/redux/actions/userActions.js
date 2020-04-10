import { SET_LOGGED } from "./types";
export const setLogged = function setIsLoggedIn(isLoggedIn, isAdmin, userName) {
  return { type: SET_LOGGED, payload: [isLoggedIn, isAdmin, userName] };
};
