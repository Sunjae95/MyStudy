import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./post";
const rootReducer = combineReducers({
  counter,
  posts,
});

export default rootReducer;
