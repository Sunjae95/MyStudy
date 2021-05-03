import { useReducer, useEffect, useCallback } from "react";

//LOADING, SUCCESS, ERROR 관련 reducer
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
//커스텀hook
//원래는 skip 없음 왜냐하면 렌더링시 같이 렌더링 되게하려고해서
//skip을 넣은이유 특정버튼을 눌렀을 때만 실행되고 싶어서
function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });
  //매번 fetchData를 사용하지않으려면 useCallback으로 감싸줌
  const fetchData = useCallback(async () => {
    dispatch({
      type: "LOADING",
    });
    try {
      const data = await callback();
      dispatch({
        type: "SUCCESS",
        data,
      });
    } catch (e) {
      dispatch({
        type: "ERROR",
        error: e,
      });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) return;
    fetchData();
    //eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;
