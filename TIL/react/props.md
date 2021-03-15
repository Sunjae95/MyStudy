# Props
properties의 약어이므로 컴포넌트를 사용할 때 특정 값을 전달해줄 때 사용 부모에서 자식으로 props를 이용해전달 

### Wrapper
```javascript
function Wrapper(props) {
    const style = {
        border: '1px solid black',
        padding: '15px'
    }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}
```
### Hello 자식
```javascript
function Hello(props){
    console.log(props);
    return <div style={{
        color: props.color,
    }}>안녕하세요 {props.name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;
```
### App에서 Wrapper와 Hello를 사용
```javascript
function App() {

  return <>
  <Wrapper>
    <Hello name = 'react' color = 'blue'/>
    <Hello  color = 'red'/>
  </Wrapper>
  </>
}
```
App에서 Hello에 props를 넣어 정보를 전달하는것을 경험하고, Wrapper에서 `props.children`을 사용해 자식요소를 반환하는것을 알게 되었다.