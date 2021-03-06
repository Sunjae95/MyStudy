# redux

## 미들웨어
- 특정 조건에 따라 액션이 무시되게 만들 수 있다.
- 액션을 콘솔에 출력하거나, 서버쪽에 로깅을 할 수 있다.
- 액션이 디스패치 됐을 때 이를 수정해서 리듀서에게 전달되도록 할 수 있다.
- 특정 액션이 발생했을 때 이에 기반하여 다른 액션이 발생되도록 할 수 있다.
- 특정 액션이 발생했을 때 자바스크립트 함수를 실행 시킬수 있다.
주요 사용용도
1. 비동기 작업을 더욱 체게적으로 관리 가능하다.
2. 유용한 함수와 Hooks를 지원받을 수 있다. (connect, useSelector, useDispatch, useStore..)
3. 기본적인 최적화가 이미 되어있다.
4. 하나의 커다란 상태
5. DevTools로 상태확인가능 돌리기가능
6. 이미 사용중인 프로젝트가 많아 범용성이 좋다.

## 리덕스는 언제 써야되나?
1. 프로젝트의 규모가 큰가?
Yes - Redux / No - Context API
2. 비동기 작업을 자주 하게 되나요?
Yes - Redux / No - Context API
3. 리덕스가 편하게 느껴지나요?
Yes - Redux / No - Context API or MobX

## 리덕스 키워드 정리
### Action
 type이라는 값이 반드시 설정되어 있어야된다. 그래야 Redux에서 어떤 상태인지 확인을 하고 업데이트를 어떻게 해야될지 판단하기 때문이다. 또한 다른 데이터도 포함할 수 있다. 추가되는 데이터는 업데이트할때 주로 사용된다.

### Action Creator
파라미터로 객체를 받아와서 액션 객체를 만들어주는 함수 (화살표 함수로도 만들 수 있다. / 필수적이지는 않지만 사용한다면 편하다.)

### Reducer
변화를 일으키는 함수이며 useReducer와 비슷하다고 생각하면된다. Reducer에서는 액션타입을 가지고 타입마다 다른 업데이트 작업을 한다. 불변성을 유지해주면서 업데이트하는것이 중요하다. Redux의 Reducer는 default값은 기존 state를 반환해주는것이 좋다.

### Store 
Redux를 사용하게 된다면 하나의 애플리케이션에서 하나의 Store가 존재하게된다. Store에는 state, reducer, 몇가지 내장함수로 존재한다.

### dispatch
store의 내장함수중 하나이며 action을 발생시키는것 or action을 store에 전달한다 라고 생각할것!

### subscribe
store의 내장함수중 하나이며 subscribe를 호출할 때 특정함수를 넣어주면 action이 dispatch될 때 마다 설정한 함수가 호출된다. 그러면 store의 state가 업데이트 될 때마다 특정 함수가 호출할 수 있다.

## 리덕스 사용 규칙
1. 하나의 애플리케이션에는 하나의 스토어가 있다.(권장)
2. 상태는 읽기전용 이다. (불변성을 지켜주자!)
3. 변화를 일으키는 함수 reducer는 순수한 함수여야 된다. (이전 상태와, 액션 객체를 파라미터로 받으며, 이전상태는 절대로 변경하지않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환한다. 똑같은 파라미터로 호출된 reducer함수는 언제나 똑같은 결과값을 반환해야한다.)

