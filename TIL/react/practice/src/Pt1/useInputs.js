import { useState, useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    //CHANGE
    case "CHANGE":
      return { ...state, [action.name]: action.value };
    //RESET
    case "RESET":
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = '';
        return acc;
      }, {});
    default:
      throw new Error("Unhandler Custom Hook");
  }
}

//커스텀Hook 만들시 네이밍은 use+기능으로 할것
// function useInputs(initialForm) {

//     const [form, setForm] = useState(initialForm);
//     const onChange = useCallback(e => {
//         const {name, value } = e.target;
//         setForm(form => ({...form, [name]:value}));
//     }, []);

//     const reset= useCallback(()=> setForm(initialForm),[initialForm]);
//     //객체나 배열 형태로 내보낼수있음
//     return [form, onChange, reset];
// }

//useState => useReducer
function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value,
    });
  }, []);
  const reset = useCallback(() => {
    dispatch({
      type: "RESET",
    });
  }, []);

  return [form, onChange, reset];
}

export default useInputs;
