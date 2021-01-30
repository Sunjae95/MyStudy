//promise 콜백함수대신 비동기를 간편하게 처리할수있는 오브젝트
//정상적으로 처리시 성공메시지 비정상적으로 처리시 에러메시지
'use strict'

//1. state
// pending => fulfilled or rejected
//2. producer vs consumer

// 1.Producer
//Promise class 는 두가지 callbackFunction을가짐
//resolve: 성공했을때 반환  reject 실패했을때
// when new Promise is created, the excutor runs automatically.
const promise=new Promise((resolve,reject)=>{
    //doing some heavy work(network, read files)
    console.log('doing something..');
    setTimeout(()=>{
        // resolver('ellie');
        reject(new Error('no network'));    //Error()는 js에서 Error시 알려주는 class
    },2000);
});

// 2.Consumers: then, catch,finally
promise
.then((value)=>{
    console.log(value);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{  //성공 실패에 관계없이 실행
    console.log('finally');
})

//3. Promise chaining
const fetchNumber =new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
})
fetchNumber
.then(num=>num*2)   //then은 값을 전달할수있고 promise를 전달할수있음
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num-1),1000);
    })
})
.then(num=> console.log(num));

//example
const getHen=()=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('🐔'),1000);
    });
const getEgg=hen=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error(`${hen}=> 🥚`)),1000);
    });
const cook=egg=>
    new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(`${egg}=>🍳`),1000);
    });

getHen()//
.then(getEgg) // << .then(hen=>getEgg(hen)) 생략가능
.catch(error=>{
    return '🥖';
})
.then(egg=>cook(egg))
.then(meal=>console.log(meal))
.catch(console.log);