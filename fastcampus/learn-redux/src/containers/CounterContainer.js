import React from "react";
import Counter from "../component/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer() {
  //상태를 조회하기 위해 useSelector를 사용
  // const { number, diff } = useSelector((state) => ({
  //   //state는 redux의 현재 state
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));
  //하지만 이렇게 하면 렌더링될때 계속 객체를 생성해서 렌더링 되므로 각각 useSelector를 해준다.
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);
  //두번째 방법은 equal를 사용하기
  const { number, diff } = useSelector(
    (state) => ({
      //state는 redux의 현재 state
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    //이렇게 쓸수있고
    // (left, right) => {
    //   return left.number === right.number && left.diff === right.diff;
    // }
    //shallowEqual를 사용할수있음 하지만 shallowEqual은 얕게 비교하므로 사용할때 조심해야된다.
    shallowEqual
  );

  const dispatch = useDispatch(); //useDispatch hook을 사용하여 dispatch사용
  //action 생성 함수를 불러와 dispatch를 해줌
  //action함수가 생성돼 action객체가 생성된다.
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

//container 컴포넌트는 redux상태를 조회하거나 action을 dispatch할 수있는 컴포넌트를 의미한다.
