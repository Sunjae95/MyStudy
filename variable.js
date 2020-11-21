'use strict';

console.log('Hello World!');

//변수 let(mutable)과Constants(Immutable)
//let(added in ES6) write and read 
// var선언하면안됨(무조건 할당, 블록에서 할당시 전역에서도 사용가능)
//let을 사용해야됨

//globalVariable 이 파일에서 전역변수로 선언돼서 최소화하여 만들수있도록하는것이 좋음
let globalVariable='global variable';
console.log(globalVariable);
//blockVariable {}으로 구성된 것은 블록에서만 사용되고 밖에서는 사용안됨 그래서 함수만들때 사용
{
    let blockVariable='Seonjae';
    console.log(blockVariable);
    blockVariable='nana';
    console.log(blockVariable);
}
// console.log(blockVariable); //{}에서 선언했으므로 실행시 오류나면서 안됨 

//Constants 값이 안바뀜 only read
//보안상의 이유, 동시에 변경안되기위해, 실수방지
const immutableVariable=5;
console.log(immutableVariable);
// immutableVariable=3; 변할수없기에 오류남

//변수타입종류
//number,string,boolean,null...
//object,box container
//function, first-class function

//number
const num=13;       //integer
const size=133.1;   //decimal number
console.log(`value: ${num}, type:${typeof num}`);
console.log(`value: ${size}, type:${typeof size}`);
//Infinity,-Infinity,NaN이 필요한이유는 나중에 숫자가 아닌값으로 나눌때 요소들이 나오는 이유를 알기위해
const infinity=1/0;
const negativeInfinity=-1/0;
const nAn='not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
//한글자든 문자열이든 모두 string으로 취급
// ` ` 을 활용할것!! ${변수} 이렇게 선언하여 변수값를 불러올수있음

//boolean
//false: 0,null,undefined, NaN, ''
//true: 값이 있을때

//null은 null 이라고 선언해야됨
//undefined 변수 선언은 되었지만 아무것도 지정안됐을때

//symbol은 맵이나 자료구조에서 고유한 식별자가 필요할때 사용
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2);     //고유한 식별자여서 같지않음
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2);   //Symbol.for로 선언시 같게 선언
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`);   //value는 description붙여야됨

//object ref는 only read but 
const seonjae={name:'seonjae', age: 20};
console.log(`${seonjae.name} ${seonjae.age}`);
//Dynamic typing
let text='hello';
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);

