import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import posts, { postsSaga } from "./post";
import { all } from "redux-saga/effects";
const rootReducer = combineReducers({
  counter,
  posts,
});

export function* rootSaga() {
  //다른 saga도 넣고싶으면 배열안에 넣어주면된다.
  yield all([counterSaga(), postsSaga()]);
}
export default rootReducer;
