const message: string = 'hello world';
const done: boolean = false;

//숫자 배열, 문자 배열 선언
const numbers: number[] = [1,2,3];
const messages: string[] = ['hello', 'world'];

// |을 선언함으로서 여러가지 타입을 정의할수있다.
let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

// 정해진 값을 정할수있음
let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';

//typescript에서는 파라미터도 타입을 정의해줘야된다. 또한 함수 리턴값 타입을 정의할 수있다.
function sum(x: number,y: number): number{  
    return x+y;
}

//숫자 배열을 받아 숫자로 리턴하는 예제
function sumArray(numbers: number[]): number{
    return numbers.reduce((acc, current)=> acc+current, 0); 
}
const total = sumArray([1,2,3,4,5])
console.log(total);

//void로 리턴 / 만약 리턴문을 넣으면 오류..!
function returnNothing(): void{
    console.log('리턴났띵~');
}
returnNothing();