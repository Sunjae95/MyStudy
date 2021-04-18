import React, { useEffect } from "react";

//컴포넌트 선언가능
const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  //useEffect 사용하려면 아래와같은 상황에서 사용해야됨
  //props로 받은 값을 state로 설정할때
  //REST API를 사용할 때
  //D3 video.js등 외부라이브러리 사용할때
  //setInterval, setTimeout등..
  // useEffect(() => {
  //   console.log("나타남");
  //   return () => {
  //     //cleaner함수는 unmount될때 사용 컴포넌트가 사라질 때 실행
  //     //라이브러리 인스턴스 제거등..
  //     console.log("사라짐");
  //   };
  // }, []);

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>({email})</span>
      {/* parameter를 넣어서 함수지정하면 ()=> function(prams)이렇게해야됨 why? function(prams)이렇게하면 컴포넌트 생성시 함수가 실행됨 */}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <>
      {/*배열을 통해 여러개 컴포넌트를 만들시 map함수를 사용하고 key값을 선언해주는것을 선호함*/}
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}
export default React.memo(UserList);

//useRef를 사용해 변수선언하여 변수값 조정 state를 사용하면 리렌더링되지만 그렇지않게 하려고 useRef를 사용
//useRef값이 바뀌어도 리렌더링 되지 않음!!
//setTimeout, setInterval의 id / 외부라이브러리를 사용하여 생성된 인스턴스 scroll위치 등...
