import React, { useState } from "react";
import axios from "axios";
// import useAsync from "./useAsync";
import { useAsync } from "react-async";
import User from "./User";

//api연동 할때 로딩 / 불러오기 / 에러 세단계로 나눠서 상태관리해줌
// 지금은 이렇게 간단하게했지만 useReducer로 구현하면 더 깔끔해짐

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"
  );
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const { data: users, error, loading, reload, run } = useAsync({
    deferFn: getUsers,
    //스킵을 추가해서 바로불러오지 X
    // promiseFn: getUsers 바로 불러오기
  });

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={reload}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>다시불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
//useAsync라이브러리
//장점: 필요할때 바로바로 사용가능하다..! / 컴포넌트에서 비동기작업 거의다 탑재됨 / hook말고 컴포넌트 형태로도 사용가능
//단점: 옵션이 다양하기 때문에 조금 복잡하다...!!
