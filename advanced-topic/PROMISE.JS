// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB calls , crytograhy, network,

//   setTimeout (function () {
// console.log('Async task is complete');
// resolve()
//   }, 1000)
// })


// promiseOne.then(function(){
//   console.log("promise consumed");
// })

//  new Promise = (function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve()
//   },1000)

// }).then(function(){
//   console.log("Async 2 resolved");
// })


// const promisethree = new Promise (function (resolve, reject){
// setTimeout(function(){
//   resolve({username: "Aman" , email: "Aman@gmail.com"})
// },1000)
// })

// promisethree.then(function(user){
// console.log(user);
// })

// const promisefour = new Promise(function(resolve, reject){
// setTimeout(function(){
// let error = false;
// if(!error){
//   resolve({username: "naruto" , password:"hinata" })
// }else{
//   reject('ERROR: Something went wrong')
// }
// },1000)
// })

// promisefour
// .then((user) => {
//   console.log(user);
//   return user.username
// })
// .then((username) => {
//   console.log(username);
// })
// .catch((error)=>{
// console.log(error);
// })
// .finally(()=>{
//   console.log("the promise is either resolved or rejected ");
// })

// const promisefive =new Promise((resolve , rejected) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "itchi uchiha", password: "killer" })
//     } else {
//       reject('ERROR: series went wrong')
//     }
//   }, 1000)
// });


// async function consumePromisefive(){
//   try {
//     const response = await promisefive
//     console.log(response);
//   } catch (error) {
// console.log(error);
//   }
// }

// consumePromisefive()


async function getAllUsers(){
  try{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json
  console.log(data);
} catch (error) {
  console.log("E: ", error)
}


}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')

.then ((response) => {
  return response.json()
})
.then ((data) => {
  console.log(data);
})
.catch((error) => console.log(error))



