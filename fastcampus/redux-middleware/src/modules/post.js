import * as postAPI from "../api/posts";
import {
  createPromiseThunk,
  createPromiseThunkById,
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
} from "../lib/asyncUtils";

//API요청하려고 action을 생성
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

const CLEAR_POST = "CLEAR_POST";

export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postAPI.getPostById);
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push("/");
};

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
