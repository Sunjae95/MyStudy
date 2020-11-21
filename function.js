//Functio
//하나의 Function은 한가지 일만하도록
//동사, 명령어로 정의할것
//js에서는 Function은 object임

//parameters에 default값 지정 가능
//ex showMessages(message, from='unknown'){}

//Rest parameters  parameters를배열형태로 받음
//ex printAll(...args){} args는 배열

//모든함수는 return undefined가 생략되어있음

//Arrow function
const simplePrint =function (){
    console.log('simplePrint');
}

const simplePrints=() => console.log('simplePrint!');