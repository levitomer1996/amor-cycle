import { combineReducers } from "redux";
import LoggedUser from "./LoggedUser.reducer";

export default combineReducers({
  user: LoggedUser,
});
