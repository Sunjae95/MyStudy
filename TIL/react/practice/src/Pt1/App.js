import React, { useRef, useState } from "react";
import Counter from "./Counter";
import CreateUser from "./CreatUser";
import InputSample from "./InputSample";
import UserList from "./UserList";
function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //active는 값에 따라 색깔을 지정해줌
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "lee",
      email: "test@test.com",
      active: true
    },
    {
      id: 2,
      username: "seon",
      email: "seon@test.com",
      active: false
    },
    {
      id: 3,
      username: "jae",
      email: "jae@test.com",
      active: false
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    //새로운 유저 객체 생성 why? 기존유저에 새롭게 데이터를 추가해야돼서
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //배열에 변화를 주려면 push, splice, sort를 쓰면 안됨
    //배열의 불변성을 지키면서 추가하는 방법을 써야됨 => 스프레드 연산자 사용
    setUsers([...users, user]);
    // setUsers(users.concat(user)); concat함수를 사용하여 추가할수도있음
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current);
    nextId.current += 1;
  };
  //배열에서 제거할 때 filter를 사용해서 구현하면 됨
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  //객체 스프레드 조심! 아직 헷갈림
  const onToggle = id => {
    setUsers(users.map(
      user=> user.id === id ? { ...user, active: !user.active} : user
    ))
  }
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
