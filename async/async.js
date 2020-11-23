//async & await

//1.async
async function fetchUser(){
    //do network reqeust in 10 secs...

    return 'seonjae';
}
//promise
function promiseFechUser(){
    return new Promise((resolve,reject)=>{
        resolve('seonjae');
    });
}

//비동기를 안쓰면 밑에 있는 코드들이 이 함수가 실행될동안 기다려짐
let user=fetchUser(); 
console.log(user);
user=promiseFechUser();
console.log(user);
user.then(console.log);

//2. await 기다려
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
    await delay(1000);
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}
//2-1.콜백지옥
// function pickFruits(){
//     return getApple().then(apple=>{
//         return getBanana().then(banana=> `${apple} + ${banana}`);
//     });
// }
//2-2. 콜백 지옥=> await로 깔끔하게 정리
// async function pickFruits(){
//     const apple= await getApple();
//     const banana=await getBanana();
//     return `${apple} + ${banana}`;
// }
//2-3.병렬로 하기
async function pickFruits(){
    const applePromise= getApple();
    const bananaPromise=getBanana();
    const apple= await applePromise;
    const banana=await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise APIs
//all은 배열들을 받을때까지 대기해주고 묶어서 저장 
function pickAllFruits(){
    return Promise
            .all([getApple(),getBanana()])
            .then(fruits=> fruits.join(' + '));
}
pickFruits().then(console.log);
//배열안에서 맨 처음에 도착한거 저장
function pickOnlyFruits(){
    return Promise
            .race([getApple(),getBanana()]);
}
pickOnlyFruits().then(console.log);

//homework  async를 활용하여 예쁘게 고치기
class UserStroage{
    loginUser(id,password){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(
                    (id==='seonjae'&&password==='rise')||
                    (id==='best'&&password==='corder')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            },2000);
        })
    }

    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user==='seonjae'){
                    resolve({name:'seonjae',role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        })
    }
}


async function helloUser(){
    const userStroage=new UserStroage();
    const id=prompt('input id');
    const password=prompt('input password');
    const loginUser= await userStroage.loginUser(id,password);
    const getRolesUser=await userStroage.getRoles(loginUser);
    return `Hello ${getRolesUser.name}, you have a ${getRolesUser.role} role`;
}
helloUser().then(console.log);