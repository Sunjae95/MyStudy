# useEffect
react 컴포넌트가 처음화면에 나타날때 사라지게 될때, props의 상태가 업데이트 되기전 될때 특정 작업을 할수있게 해줌. 추가적으로 리렌더링 될 때마다 다른작업들도 할 수있음 

mount: 컴포넌트가 나타난다. 
주로 마운트될때
1. props를 state에 올리때
2. REST API요청
3. 라이브러리 사용시
4. setInterval, setTimeout등..

unmount: 컴포넌트가 사라진다.
주로 언마운트 될때 (뒷정리 함수라 생각하자)
1. setInterval, setTimeout으로 한 작업을 제거할 때 => clearInterval, clearTimeout
2. 라이브러리 인스턴스 제거
```javascript
useEffect(()=>{
    console.log('컴포넌트 생성');
    return () => {
        console.log('컴포넌트 사라짐');
    }
},[]);
```

# useMemo
예전에 사용한 연산을 다시 재사용할때 사용 주로 성능개선할 때 씀
```javascript
useMemo(()=> function , [dept]);
dept가 바뀌면 함수가 실행해줌
```

# useCallback
useMemo와 비슷하지만 함수를 위한 것이다. 문법은 useMemo와 같음

# useReducer
컴포넌트의 상태를 업데이트할 때 useState를 통해 업데이트했지만 이와 같이 useReducer도 상태를 업데이트 시켜주는 Hook함수이다.
useState는 상태를 변경하고싶은 대상을 직접선택하여 업데이트하는 반면에 useReducer는 액션이라는 객체를 기반으로 상태를 업데이트한다. 액션은 업데이트할 때 참조하는 객체를 뜻한다. 
useReducer를 사용하면 상태업데이트 로직을 컴포넌트 밖으로 분리 가능 심지어 다른파일에서 작성후 불러올수도있음
reducer는 상태를 업데이트하는 함수를 뜻한다. 
```javascript
const [number(상태), dispatch(액션을 발생하는 함수, 보내다라는 의미)]useReducer(reducer(함수), 0(객체,문자, 배열등 될수있음));
``` 
