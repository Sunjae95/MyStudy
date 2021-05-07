import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
// ACTION TYPE설정
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
//thunk를 통해서 만들었던 것을 함수가아닌 기존 객체로 만듬
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  //delay는 말그대로 기다림
  yield delay(1000);
  //put은 dispatch랑 비슷함
  yield put(increase());
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

//여러가지 saga를 가지고 rootsaga를 만들기위해 내보내 줘야된다.
export function* counterSaga() {
  //INCREASE_ASYNC가 dispatch 될때마다 실행된다. takeLatest
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  //DECREASE_ASYNC가 들어오면 기존것을 무시하고 최근것만 실행 / takeLeading은 가장 처음만 실행 나머지무시
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
//saga를 사용하면 순수 action을 reducer 할수있다
const initialState = 0;

//REDUCER 작성

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
