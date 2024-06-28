//singleton

//object literals

const mySym = Symbol("key1")

const JsUsers ={
  name:"Aman",
"full name": "Aman Chowdery",
  [mySym]:"mykey1",
  age:18,
  location:"yadgir",
  email:"aman@gmail.com",
  isLoggedIn:false,
  lastLoggedDays: ["Monday","Friday"]
}

console.log(JsUsers.age)
console.log(JsUsers["email"])
console.log(JsUsers["full name"])
console.log(JsUsers[mySym])


JsUsers.email ="aman@chatgpt"
//Object.freeze(JsUsers)
JsUsers.email ="aman@amazon.com"
console.log(JsUsers)

JsUsers.greeting = function(){
  console.log("Hello js Users")
}

JsUsers.greetingTwo = function() {
  console.log(`Hello Js user,${this.name} `);
}

console.log(JsUsers.greeting());
console.log(JsUsers.greetingTwo());