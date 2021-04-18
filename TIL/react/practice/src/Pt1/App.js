import React, { useRef, useState, useMemo,useCallback } from "react";
import Counter from "./Counter";
import CreateUser from "./CreatUser";
import InputSample from "./InputSample";
import UserList from "./UserList";

function conuterActiveUsers(users) {
  console.log("활성사용자 세는중");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  //useCallback Hook사용전
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };
  //onChange함수는 inputs가 바뀔때 마다 실행된다.
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  }, [inputs]);

  //active는 값에 따라 색깔을 지정해줌
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    //새로운 유저 객체 생성 why? 기존유저에 새롭게 데이터를 추가해야돼서
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //배열에 변화를 주려면 push, splice, sort를 쓰면 안됨
    //배열의 불변성을 지키면서 추가하는 방법을 써야됨 => 스프레드 연산자 사용
    setUsers(users => ([...users, user]));
    // setUsers(users.concat(user)); concat함수를 사용하여 추가할수도있음
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current);
    nextId.current += 1;
  }, [username, email, users]); //useCallback했는데 아직 헷갈림..!!

  //배열에서 제거할 때 filter를 사용해서 구현하면 됨
  const onRemove = useCallback((id) => {
    setUsers(users.filter((user) => user.id !== id));
  }, [users]);

  //객체 스프레드 조심! 아직 헷갈림
  const onToggle = useCallback((id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, [users]);

  //useMemo 최적화하는데 사용 불필요한 리렌더링을 방지하기위해 사용 필요한 연산을 필요할 때만 사용할 수 있음
  //parameter는 함수, deps를 넣음 deps에는 바뀌는 값을 넣어서 최적화해줌
  const count = useMemo(() => conuterActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자수: {count}</div>
    </>
  );
}

export default App;
