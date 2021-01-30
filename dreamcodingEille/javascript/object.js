//object ={key: value};
//이렇게 인자가 많아지면 힘듬
const name='seonjae';
const age=4;
print(name,age);
function print(name,age){
    console.log(name);
    console.log(age);
}
//object로 만들면 한번에 관리할수있어서 좋음
const seonjae={name:'seonjae',age:4};
//function을 만들때 object로 받으면 편함
function objectPrint(person){
    console.log(person.name);
    console.log(person.age);
}
objectPrint(seonjae);

//Conmputed properties
console.log(seonjae.name);
console.log(seonjae['name']); //key should be always string

//Property value shorthand
const person1={name:'bob',age:2};
const person2={name:'sss',age:4};
const person3=makePerson('seonjae',4);

function makePerson(name,age){
    return {    //key===value면 생략가능
        name,   //name:name,
        age,    //age:age
    };
}
//in operator key in obj
console.log('name' in seonjae);

//for..in vs for...of
//for(key in obj)
for(key in seonjae){
    console.log(key);
}
//for (value of iterable)
const array=[1,2,3,4,5];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
//for of....
for(value of array){
    console.log(value);
}

//Function cloning
const user={name:'seonjae',age:5};
const user2=user;
user2.name='coder';
console.log(user);  //name: seonjae=>coder 바뀜
//바뀌지않고 clone하기
//old way
const user3={};
for(key in user){
    user3[key]=user[key];
}
console.log(user3);

const user4={};
Object.assign(user4,user);  //to obj, from obj
console.log(user4);