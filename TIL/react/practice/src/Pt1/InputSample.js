import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = inputs;

  //💨스프레드 문법, 비구조할당 중요
  //객체 상태를 업데이트 하려면 spread 문법을 사용하고 특정값을 바꿔 줘야된다.
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    // 바로 setInputs에 변수선언없이 넣을수있음
    // const nextInputs = {
    //   ...inputs,
    //   [name]: value,
    // };
    // nextInputs[name] = value; 원래는 이 문법
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };
  return (
    <>
      <input name="name" placeholder="이름" value={name} onChange={onChange} />
      <input
        name="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </>
  );
}

export default InputSample;
// import React, { useState } from "react";

// function InputSample() {
//   const [text, setText] = useState("");

//   const onChange = (e) => {
//     setText(e.target.value);
//   };
//   const onReset = () =>{
//       setText('');
//   }
//   return (
//     <>
//       <input onChange={onChange} value={text} />
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값:</b>
//         {text}
//       </div>
//     </>
//   );
// }
// export default InputSample;
