//String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);

//Logical operators
//||는 맨앞이 true면 뒤에있는 조건을 계산하지도않고 true로 나오게함
//그래서 계산이 빠른 조건 순서로 두기!!
let i;
for(i=0;i<=10;i++){
    if(i%2===0)
    console.log(i);
}
i=0;
while(i!=8){
    if(i%2===0)
    console.log(i);
    i++;
}