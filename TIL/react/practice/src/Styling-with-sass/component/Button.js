import React from "react";
import "./Button.scss";
import classNames from "classnames";
//ClassName 이름 설정 TIP
//컴포넌트 이름을 고유하게 지정
// 최상위 엘리먼트의 클래스이름을 컴포넌트 이름과 똑같게 하기
// 그 내부에서 셀렉터 사용
function Button({ children, size, color, outline, fullWidth, ...rest }) {
  //rest props를 활용하여 재사용성이 높게 개발하기!!


  // className은 ['Button, size].join(' ') or `Button ${size}`이렇게 해줄수있다.
  //하지만 매번 props를 전달해줄때 추가해줄수없으니깐 className 라이브러리 사용해보기
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};
export default Button;
