import React, { useRef, useReducer, useMemo, useCallback } from "react";
import Counter from "./Counter";
import CreateUser from "./CreatUser";
import InputSample from "./InputSample";
import UserList from "./UserList";

//useState vs useReducer 
//state가 단순하면 useState 그렇지않고 복잡하면 useReducer
function conuterActiveUsers(users) {
  console.log("활성사용자 세는중");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "lee",
      email: "test@test.com",
      active: true,
    },
    {
      id: 2,
      username: "seon",
      email: "seon@test.com",
      active: false,
    },
    {
      id: 3,
      username: "jae",
      email: "jae@test.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user],
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;
  const nextId = useRef(4);
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);
  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(()=> conuterActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자수: {count}</div>
    </>
  );
}

export default App;
