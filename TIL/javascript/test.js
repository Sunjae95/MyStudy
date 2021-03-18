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

var x = 'parent';

child();

function child(){
  var y = 'childern';
  console.log(x);
}

console.log(y);