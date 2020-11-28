'use strict'

let write=document.getElementById("write");
let text=document.getElementById("print");
console.log(write);
console.log(text);

function print(){
    text.innerText=write.innerText;
}

print();
