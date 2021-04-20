import React, { useContext } from "react";
import { UserDispatch } from "./ContextApp";

//컴포넌트 선언가능
const ContextUser = React.memo(function ContextUser({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => dispatch({
            type: 'TOGGLE_USER',
            id
        })}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => dispatch({
          type:'REMOVE_USER',
          id
      })}>삭제</button>
    </div>
  );
});

function ContextUserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <ContextUser user={user} key={user.id} />
      ))}
    </>
  );
}
export default React.memo(ContextUserList);
