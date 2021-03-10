# 객체
```javascript
const dog = {       //코드 블록이아님
    //key(보통 문자열로 선언 공백이있으면 안됨 아니면 ''로 묶어줘야됨) value값으로 선언함
    name: '멍멍이',
    age: 2
}
console.log(dog);   //Object{name: "멍멍이", age: 2}
console.log(dog.name);//멍멍이
console.log(dog.age);//2
```

# 비구조 할당(객체 구조 분해)
객체에서 특정값을 뽑아내는것임. 잘쓰면 되게 유용함 함수내부에서 사용할 필요없음
```javascript
const ironMan = {
    name: 'tony stark',
    actor: 'RDJ',
    alias: 'ironMan'
};

function print(hero) {
    const { alias, name, actor} = hero; //객체에서 뽑아 낼것을 오른쪽에 삽입
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
    return text;
}

function print({ alias, name, actor}) { //객체에서 뽑아 낼것을 파라미터에 추가
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
    return text;
}
```

# 객체안에 함수 넣기
```javascript
const dog = {
    name: '멍멍이',
    sound: '멍멍',
    say: function say() {   
        console.log(this.sound);    //this는 현 함수가 위치한 객체
    },   //dog.say() => '멍멍'
    say: function () { /*...*/},    //생략가능
    say() { /*...*/ }, //생략가능
    say: () => { console.log(this.sound); } //function this는 자신이 속해있는곳,  arrow function this는 그렇지않음
}