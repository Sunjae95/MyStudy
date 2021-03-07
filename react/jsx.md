# JSX

JSX란 JavaScript를 확장한 문법이다. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장한다. JSX라고 하면 템플릿 언어가 떠오를 수도 있지만, JavaScript의 모든 기능이 포함되어 있다.

React에서는 이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등 렌더링 로직이 본질적으로 다른 UI 로직과 연결된다는 사실을 받는다.

React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 `컴포넌트`라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리한다.
  
React는 JSX 사용이 필수가 아니지만, 대부분의 사람은 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움이 된다고 생각한다. 또한 React가 더욱 도움이 되는 에러 및 경고 메시지를 표시할 수 있게 해준다.  

## 실습  
```javascript
function App() {

  const style = {
    backgroundColor: 'black',
    color:'aqua',
  }

  return (
    //하나의 태그로 되어있어야됨 ex) 여러개일경우 <div>도 되지만  <></>도 가능
    //태그는 꼭닫아줘야된다.!!
    <>
    {/* 태그밖 주석은 이런식으로 달아줘야됨*/}
    <div >태그는 꼭 닫혀있어야된다.</div>
    <div style={style} //속성을 받을때는 {}이렇게 사용해야 function안에 변수를 사용할수있음      
    >속성은 {}이렇게 받을것!!</div>
    {/* class명 선언시 className으로 설정할것! */}
    <div className="gray-box"></div>
  </>
  );
}
```
