import React, { useState, useReducer } from "react";

//1. reducer함수 생성
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Unhandled Action");
  }
}

function Counter() {
  // 2. useReducer 생성
  //dispatch: action을 보내는 것
  //useReducer parameter에 reduce함수와 초기값을 설정함
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const onDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  //상태 업데이트가 밖에서 실행되는것을 알수 있음
  


  // reduce 사용전
  // const [count, setCount] = useState(0);
  // //setState 함수 사용법 2가지
  // const onIncrease = () => {
  //     //1. 다음 상태값을 넣어줄 수 있음
  //     setCount(count+1);
  // }
  // const onDecrease = () => {
  //     //2. 업데이트 함수를 사용할 수 있음(최적화 관련필요)
  //     setCount(prevNumber => prevNumber-1);
  // }
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  );
}
export default Counter;
