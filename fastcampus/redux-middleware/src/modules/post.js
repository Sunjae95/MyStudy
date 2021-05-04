import { createStore } from "redux";
import * as postAPI from "../api/posts";
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from "../lib/asyncUtils";

//API요청하려고 action을 생성
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

// //리팩토링 전
// //thunk함수 생성
// export const getPosts = () => async (dispatch) => {
//   //요청시작
//   dispatch({ type: GET_POSTS });
//   //API를 호출
//   try {
//     const posts = await postAPI.getPosts();
//     //성공했을 때
//     dispatch({ type: GET_POSTS_SUCCESS, posts });
//   } catch (e) {
//     //실패했을 때
//     dispatch({ type: GET_POSTS_ERROR, error: e });
//   }
// };
// export const getPost = (id) => async (dispatch) => {
//   //요청시작
//   dispatch({ type: GET_POST });
//   //API를 호출
//   try {
//     const post = await postAPI.getPostById(id);
//     //성공했을 때
//     dispatch({ type: GET_POST_SUCCESS, post });
//   } catch (e) {
//     //실패했을 때
//     dispatch({ type: GET_POST_ERROR, error: e });
//   }
// };
//리팩토링 후
export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postAPI.getPostById);

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

const getPostsReducer = handleAsyncActions(GET_POSTS, "posts");
const getPostReducer = handleAsyncActions(GET_POST, "post");

//Reducer 생성
export default function posts(state = initialState, action) {
  switch (action.type) {
    //handleAsyncActions 사용전
    // case GET_POSTS:
    //   return { ...state, posts: reducerUtils.loading() };
    // case GET_POSTS_SUCCESS:
    //   return {
    //     ...state,
    //     // 리팩토링전
    //     // posts: reducerUtils.success(action.posts),
    //     //리팩토링 후
    //     posts: reducerUtils.success(action.payload),
    //   };
    // case GET_POSTS_ERROR:
    //   return {
    //     ...state,

    //     // 리팩토링전
    //     // posts: reducerUtils.error(action.error),
    //     //리팩토링 후
    //     posts: reducerUtils.error(action.error),
    //   };
    // case GET_POST:
    //   return { ...state, post: reducerUtils.loading() };
    // case GET_POST_SUCCESS:
    //   return {
    //     ...state,
    //     // 리팩토링전
    //     // post: reducerUtils.success(action.post),
    //     //리팩토링 후
    //     post: reducerUtils.success(action.payload),
    //   };
    // case GET_POST_ERROR:
    //   return {
    //     ...state,
    //     // 리팩토링전
    //     // post: reducerUtils.error(action.error),
    //     //리팩토링 후
    //     post: reducerUtils.error(action.payload),
    //   };

    //handleAsyncActions 사용후
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    default:
      return state;
  }
}

//처음부터 리팩토링하려고 하지말것 배웠던 그대로 일단 만들어보고 필요시 리팩토링 해주기