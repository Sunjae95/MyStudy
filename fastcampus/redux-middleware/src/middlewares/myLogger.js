//미들웨어란
//함수를 만드는 함수를 만드는 함수를 실행하기위한 함수

const myLogger = (store) => (next) => (action) => {
  //한꺼번에 가져오면 안됨
  console.log(action);
  //action을 전달 미들웨어가 있다면 다음 미들웨어에 전달. 다음 미들웨어가 없다면 리듀서에게 전달
  console.log("\t Prev:", store.getState());
  const result = next(action);
  console.log("\t Next:", store.getState());
  return result;
};

export default myLogger;
