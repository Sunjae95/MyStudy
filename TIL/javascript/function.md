# 함수

파라미터를 처리해서 결과를 얻어내는 기능을 가짐

```javascript
function add(a, b) {
  //a,b는 파라미터 input값이라 생각하자
  return a + b; //결과
  //리턴이 되면 그 밑에 있는 코드는 동작X
}
const sum = add(1, 2); //3
```

# ES6

자바스크립트의 버전이라 고 생각하면됨 ES2015와 같은말

# templete literal

```javascript
function hello(name) {
  return `Hello ${name}!`;
}
const result = hello("seonjae"); //Hello ${name}!
```

# practice

```javascript
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 800) {
    return "B";
  } else if (score >= 700) {
    return "C";
  } else {
    return "F";
  }
}
const grage = getGrade(30); //F
```

# arrow function

```javascript
const add = (a, b) => {
  return a + b;
};
// const add = (a,b) => a + b; 바로 리턴할 수 있으면 이렇게 생략이 가능하다.
const hello = (name) => {
  return `Hello ${name}!`;
};
const sum = add(1, 2); //3
const result = hello("seonjae"); ////Hello ${name}!
```

function의 this와 arrow function의 this가 다름

함수의 파라미터에서 객체를 받을수 있음

```javascript
const ironMan = {
  name: "tony stark",
  actor: "RDJ",
  alias: "ironMan",
};
function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`;
  return text;
}
console.log(print(ironMan)); //ironMan(tony stark)역할을 맡은 배우는 ironMan입니다.
```

# getter, setter

getter 특정값을 조회하기 위해 사용함 함수앞에 `get`을 붙여 선언
setter 특정값을 설정할 때 마다 `set`을 붙여 선언

```javascript
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum함수실행');
        return this.a + this.b; //return을 반환해야됨
    }
    set name(value) {   //파라미터 무조건 필요!
        this.a = value;
    }
}
```

# 함수 선언, 함수 표현식

## 함수 선언

함수 선언이란 지정된 매개변수를 갖는 함수를 정의하는것을 뜻한다.

```javascript
function example() {
  return "hi";
}
example(); //호출하려면 함수이름으로 호출해야됨
```

## 함수 표현식

변수로 저장되어 변수를 함수처럼 사용하는것이 가능

```javascript
const sum = function (a, b) {
  return a + b;
}; //호출하려면 변수이름으로 호출해야됨
```
