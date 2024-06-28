const user = {
  username:"aman",
  price:300,

  welcomeMessage: function(){
console.log(`${this.username},welcome to website`);
console.log(this);
  }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chaivalla(){
//   let username ="Shy"
//   console.log(this.username)
// }
// chaivalla()

// const chai = function (){
//   let username = "Shy"
//      console.log(this.username)
// }


const chai = () => {
  let username = "Shy"
     console.log(this)
}


//chai ()

// const number = (num1,num2) =>{
// return num1 + num2
// }

// const addTwo = (num1,num2) =>      num1+num2

// const addTwo = (num1,num2) =>      (num1 + num2)

const addTwo = (num1,num2) =>({username : "aman"})



console.log(addTwo(6,4))

const myArray = [2,3,4,5,6,7]

// myArray.forEach(() =>{} )