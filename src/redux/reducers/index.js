import { combineReducers } from "redux";
import usersReducer from "./UsersReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer
});

export default rootReducer;