'use strict'
//javaScript is synchronous
//hoisting후에 정해진 순서에 따라 실행
 //hoisting: var, function이 맨위로 가는것!!

 console.log('1');                  //1.동기
 setTimeout(()=>{                   //2.비동기
     console.log('2');
 },1000);
 console.log('3');                  //3.동기

 //Synchrononus callback
 //실행시 function{} hoisting되어 맨위로 올라감
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));                 //4/동기

 //Asynchrononus callback
 //실행시 function{} hoisting되어 맨위로 올라감
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'),2000);        //5.비동기

//Callback Hell example
class UserStroage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id==='seonjae'&&password==='rise')||
                (id==='best'&&password==='corder')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user,onSuccess,onError){
        setTimeout(()=>{
            if(user==='seonjae'){
                onSuccess({name:'seonjae',role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}
const userStroage=new UserStroage();
const id=prompt('input id');
const password=prompt('input password');
userStroage.loginUser(
    id,
    password,
    user=>{
        userStroage.getRoles(
            user,
            userWithRole=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error=>{});
    },
    error=>{console.log(erroe);}
    );
    //콜백체인의 문제점
    //가독성↓(어디서 어떻게 연결됐는지 모름)