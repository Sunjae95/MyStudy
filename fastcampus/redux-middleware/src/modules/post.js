import * as postAPI from "../api/posts";
import {
  createPromiseSaga,
  createPromiseSagaById,
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
} from "../lib/asyncUtils";
import { getContext, select, takeEvery } from "redux-saga/effects";

//API요청하려고 action을 생성
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";
const GO_TO_HOME = "GO_TO_HOME";

const CLEAR_POST = "CLEAR_POST";
const PRINT_STATE = "PRINT_STATE";

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
  meta: id,
});
export const printState = () => ({ type: PRINT_STATE });

const getPostsSaga = createPromiseSaga(GET_POSTS, postAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postAPI.getPostById);
function* goToHomeSaga() {
  const history = yield getContext("history");
  history.push("/");
}
function* printStateSaga() {
  const state = yield select((state) => state.posts);
  console.log(state);
}
//saga를 모니터링하는 함수 작성
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

export const goToHome = () => ({ type: GO_TO_HOME });

export const clearPost = () => ({ type: CLEAR_POST });
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};
const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsyncActionsById(GET_POST, "post", true);

//Reducer 생성
export default function posts(state = initialState, action) {
  switch (action.type) {
    //handleAsyncActions 사용후
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}

//처음부터 리팩토링하려고 하지말것 배웠던 그대로 일단 만들어보고 필요시 리팩토링 해주기
