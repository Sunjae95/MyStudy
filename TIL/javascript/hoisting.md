# Hoisting
호이스팅은 ECMA2015전에는 안쓰이던 단어였다. 변수 및 함수 선언이 물리적으로 작성한 코드의 상단으로 옮겨지는 것으로 볼수있지만 실제로는 그렇지 않습니다. 호이스팅은 컴파일 단계에서 변수 및 함수 선언이 메모리에 저장된다고 원래있던 코드가 변경되지는 않습니다. 
```javascript 
dogName("gomi");

function dogName(name) {
  console.log("My dog's name is " + name);
}
```
이렇게 1번째 라인에서 시작인데 dogName이 선언되어 있지 않다. 하지만 Hoisting을 통해 함수선언이 먼저 되어 오류 없이 작동하는 것을 알 수 있다.
