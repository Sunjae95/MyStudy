import React, { useReducer, useMemo, createContext } from "react";
import ContextCreateUser from "./ContextCreateUser";
import ContextUserList from "./ContextUserList";
import produce from "immer";

function conuterActiveUsers(users) {
  console.log("활성사용자 세는중");
  return users.filter((user) => user.active).length;
}

const initialState = {
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
    case "CREATE_USER":
      //immer라이브러리를 사용하여 불변성 지키기
    return produce(state, draft => {
      draft.users.push(action.user);
    });  
    // return {
      //   inputs: initialState.inputs,
      //   users: [...state.users, action.user],
      // };
    case "TOGGLE_USER":
      return produce(state, draft=>{
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      })
      // return {
      //   ...state,
      //   users: state.users.map((user) =>
      //     user.id === action.id ? { ...user, active: !user.active } : user
      //   ),
      // };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled Action");
  }
}

export const UserDispatch = createContext(null);

function ContextApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => conuterActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <ContextCreateUser />
      <ContextUserList users={users} />
      <div>활성 사용자수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default ContextApp;
