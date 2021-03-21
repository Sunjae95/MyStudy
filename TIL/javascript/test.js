// var first = '1st';

// function call(){
//     var second = '2nd';

//     function plus(){
//         var third = '3th';
//         console.log(first+second+third);
//     }
//     plus();
// }
// call();

// var x = 1;

// function foo() {
//   var x = 10;
//   bar();
// }

// function bar() {
//   console.log(x);
// }

// foo(); // ?
// bar(); // ?

// function exampleFunction() {
//   var x = "declared inside function";
//   // x는 오직 exampleFunction 내부에서만 사용 가능.
//   console.log("Inside function");
//   console.log(x);
// }

// console.log(x);  // 에러 발생

// var x = 'parent';

// child();

// function child(){
//   var y = 'childern';
//   console.log(x);
// }

// console.log(y);

function init() {
  var name = "Seonjae";     // name은 init에 의해 생성된 지역 변수이다.
  function floatName() {    // floatName() 은 내부 함수이며, 클로저다.
    console.log(name);            // 부모 함수에서 선언된 변수를 사용한다.
  }
  floatName();
}
init();
