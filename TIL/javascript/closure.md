# 클로저(closure)
Front-End 개발자가 되기위해 JS를 공부하다가 Closure에 궁금증이 생겼다. 이전 ExcutionContext, Scope등 자꾸 Closure를 언급했기 때문이다. 그래서 평소와 같이 MDN을 방문하여 공부를 하게 되었다.
- 클로저란 함수와 함수가 선언된 `어휘적 환경의 조합`이다.  

클로저를 이해하려면 자바스크립트가 어떻게 변수의 `유효범위를 지정`하는지(Lexical scoping)를 먼저 이해해야 한다.

## Lexical Scoping
Lexical Scoping이란 스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정하는것이다. 실행컨텍스트에서 스코프체인이 바인딩한 객체가 Lexical Scope의 실체이다. 
```javascript
function init() {
  var name = "Seonjae";     // name은 init에 의해 생성된 지역 변수이다.
  function floatName() {    // floatName() 은 내부 함수이며, 클로저다.
    alert(name);            // 부모 함수에서 선언된 변수를 사용한다.
  }
  floatName();
}
init();
```
위 예시를 통해 함수가 중첩된 상황에서 파서가 어떻게 변수를 처리하는지 알 수 있게되며 이것은 `어휘적 범위 지정(Lexical Scoping)`의 한 예이다.
여기서 Lexical의 의미
1. 변수가 어디에서 사용 가능한지 알기 위해 그 변수가 소스코드 내 어디에서 선언되었는지 고려한다는 것을 의미
2. 중첩된 함수는 외부 범위(scope)에서 선언한 변수에도 접근할 수 있다

## Closure정의
Closure란 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수이다.
쉽게 말하면 Closure란 자신이 `생성`될 때의 `환경(Lexical environment)을 기억`하는 함수다