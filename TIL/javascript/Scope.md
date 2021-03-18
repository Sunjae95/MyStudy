# Scope(스코프)
ExecutionContext(실행 컨텍스트)를 공부하다가 몰라서 찾아보게 되었다. ExecutionContext의 3가지 객체(VariableObject, ScopeChain, this)중 ScopeChain에서 Scope란 단어의 뜻을 몰라서 지금까지 해결이 안되고 있는 상황이다. 그래서 Scope에 대해 알아보자

Scope는 현재 실행되는 컨텍스트를 의미한다. 예시를 보자
```javascript

function exampleFunction() {
  var x = "declared inside function";
  // x는 오직 exampleFunction 내부에서만 사용 가능.
  console.log("Inside function");
  console.log(x);
}

console.log(x);  // 에러 발생 => ReferenceError: x is not defined
```
이와 같은 상황은 함수는 자바스크립트에서 `클로저` 역할을 하기 때문에 스코프를 생성하므로 `함수 내에 정의된 변수는 외부 함수나 다른 함수 내에서는 접근 할 수 없다.`
```javascript
var x = "declared outside function";

exampleFunction();  

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);         //오류없음
```
위의 예시는 변수가 함수 외부의 전역에서 선언되었기 때문에 유효하다.

나는 Scope는 실행되는 컨텍스트도 맞지만 범위 개념이 더 큰거같다. 해당 Scope 내에 없으면 참조 할 수 없고, 계층적인 구조를 가져서 `하위 Scope는 상위 Scope를 참조 할 수있지만 반대는 불가`하다.
```javascript
var x = 'parent';

child();    //parent 출력 하위는 / 상위를 참조가능

function child(){
  var y = 'childern';
  console.log(x);
}

console.log(y); //ReferenceError: y is not defined 오류 / 상위는 하위 참조 불가
```
>**참고**
>https://developer.mozilla.org/ko/docs/Glossary/Scope