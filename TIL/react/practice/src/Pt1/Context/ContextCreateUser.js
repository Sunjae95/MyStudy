import React, { useContext,useRef } from "react";
import useInputs from "../useInputs";
import { UserDispatch } from "./ContextApp";
function ContextCreateUser() {
  const dispatch = useContext(UserDispatch);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
const nextId=useRef(4);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id:nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current+=1;
  }
  const { username, email } = form;
  return (
    <>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </>
  );
}

export default React.memo(ContextCreateUser);
