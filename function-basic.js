//함수 선언 

//1.어떤 기능을 수행
//인자받는 부분과 함수 구현부분을 나뉨
function doSomething(){
    console.log('hello');
}
//2.특정한 값을 계산하여 전달
function add(a,b){
    const sum=a+b;
    return sum;
}

//함수 호출
doSomething();
const result=add(2,4);
console.log(result);

//함수를 인자로 전달
function doFunctionSomething(add){
    console.log(add);
    //함수 인자 값 전달
    const result=add(2,3);
    console.log(result);
}
//함수 호출
doFunctionSomething(add);

