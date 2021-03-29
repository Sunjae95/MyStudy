import React, { useState, useRef } from 'react';
import './App.css';
import Counter from './Counter';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname }  = inputs;
  
  const [users, setUsers] = useState([]);
  const nextId = useRef(1);
  
  const onChange = e => {
    const {name, value } = e.target;
    setInputs({
        ...inputs,
        [name]:value
    });
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      name: name,
      nickname: nickname,
      active: true
    };
    nextId.current+=1;
    
    setUsers([...users, user]);
    // setUsers(users.concat(user));
    setInputs({
      name:'',
      nickname:''
    });
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user=> user.id === id
      ? {...user, active: !user.active}
      : user
    ));
  };

  return (
    <>
      <Counter/>
      <CreateUser 
        name={name}
        nickname={nickname}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
