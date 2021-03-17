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

var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?