//my solution
// class UserStroage{
//     loginUser=(id,password)=>
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(
//                 (id==='seonjae'&&password==='rise')||
//                 (id==='best'&&password==='corder')
//             ){
//                 resolve(id);
//             }else{
//                 reject(new Error('not found'));
//             }
//         },1000);
//     });

//     getRoles=(user)=>
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(user==='seonjae'){
//                 resolve({name:'seonjae',role:'admin'});
//             }else{
//                 reject(new Error('no access'));
//             }
//         },1000);
//     });
// }
// const userStroage=new UserStroage();
// const id=prompt('input id');
// const password=prompt('input password');
// userStroage.then(loginUser(id,password))

//ellie solution
// class UserStroage{
//     loginUser(id,password){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 if(
//                     (id==='seonjae'&&password==='rise')||
//                     (id==='best'&&password==='corder')
//                 ){
//                     resolve(id);
//                 }else{
//                     reject(new Error('not found'));
//                 }
//             },1000);
//         });
//     }

//     getRoles(user){
//        return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(user==='seonjae'){
//                 resolve({name:'seonjae',role:'admin'});
//             }else{
//                 reject(new Error('no access'));
//             }
//         },1000);
//        })
//     }
// }
// const userStroage=new UserStroage();
// const id=prompt('input id');
// const password=prompt('input password');

// userStroage.loginUser(id,password)
// .then(userStroage.getRoles)
// .then(user=> alert(`Hello ${user.name}, you have a ${user.role} role`))
// .catch(console.log);

//Practice
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
const userStroage=new UserStroage();
const id=prompt('input id');
const password=prompt('input password');
userStroage
    .loginUser(id,password)
    .then(userStroage.getRoles)
    .then(user=>alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
