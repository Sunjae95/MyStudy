# ContextAPI
컴포넌트에서 props를 전달할 때 1 => 2=> 3=> 4이렇게 순서대로 전달해야된다. 하지만 이렇게 컴포넌트들이 많아 질때 이렇게되면 번거롭고 느려진다. 그래서 이러한 방법을 해결하기 위한 방법으로 1 => 4로 바로 가게 해주는 ContextAPI를 사용하는것이다. 

## Example
```javascript
function Child({ text }){
    return <div>안녕하세요? {text}</div>
}

function Parent({ text }) {
    return <Child text={text}/>
}

function GrandParent({ text }){
    return <Parent text={text} />
}

function ContextSample(){
    return <GrandParent text="GOOD" />
}

// ContextSample => GrandParent => Parent => Child
// 순서대로 text라는 props을 넘겨줘야되는 상황임
// 하지만 우리는 ContextSample => Child로 넘겨주고싶음

```
## After
```javascript  
//1. Context에서 사용할 기본값을 설정할수있음
const MyContext = createContext('defaultValue');
function Child(){
    //3. text에 useContext를 사용하여 MyContext 값을 가져와 사용할 수있음
    const text = useContext(MyContext);
    return <div>안녕하세요? {text}</div>
}

function Parent() {
    return <Child/>
}

function GrandParent(){
    return <Parent/>
}

function ContextSample(){
    return (
    /*2. MyContext안에 컴포넌트인 Provider로 묶어줌 
    value값을 설정하여 createContext의 값을 설정해준다.*/
    <MyContext.Provider value="GOOD">
        <GrandParent/>
    </MyContext.Provider>
    );
}
```

## value값을 바꾸는 예제
```javascript
//...앞의 내용과같음

function ContextSample(){
    //useState를 사용하여 value값을 바꿔줌
    const [value, setValue] = useState(true);
    return (
    <MyContext.Provider value={ value ? 'GOOD': 'BAD'}>
        <GrandParent/>
        {/*버튼을 눌렀을 때 value값 바꿈*/}
        <button onClick={()=> setValue(!value)}>Click Me</button>
    </MyContext.Provider>
    );
}
//이렇게 하면 모든 컴포넌트를 걸치지않고 ContextAPI를 사용하여 필요한 컴포넌트 간의 props를 전달하게 된다.
```

# 결론
useState vs useReduce에서 간단하면 useState, 복잡하면 useReduce라고 했다. 이와 비슷하게 컴포넌트 간에 props를 많이 넘긴다면 useReduce와 ContextAPI를 사용하여 관리하는것이 좋다.
