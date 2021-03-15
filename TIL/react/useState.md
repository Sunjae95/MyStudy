# useState

# useRef
Js에서는 특정 DOM을 선택할때 querySelector나 getElementBy..등을 사용하는데 react에서는 ref를 사용 reactHook에서는 useRef를 사용함 변수를 관리할때 많이 사용함

- useRef로 컴포넌트 변수만들기
주로 setTimeout, setInterval의 id외부라이브러리를 사용하여 생성된 인스선트 Scroll위치 등..
useRef를 사용하면 값이 바뀌어도 리렌더링이 되지않는다.
useRef값은 컴포넌트가 리렌더링 돼도 값을 유지한다.


# 배열렌더링
배열을 렌더링할때 map으로 만들어주고 key값을 설정해줘야된다. 왜냐하면 key값이없으면 랜더링할 때 불필요한 작동을 많이 하게 되기 때문이다.

# 배열 생성, 수정, 삭제
# 배열에 항목 삭제하기
배열의 불변성을 지키면서 삭제할것 fiter함수를 사용하는것이 좋음

# 배열 항목 수정하기

