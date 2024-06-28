//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name ="sam"
tinderUser.isLoggedin = false


//console.log(tinderUser)

const regularUser = {
  email :"aman123@gamil.com",
  fullname : {
    userfullname: {
firstname: "aman",
lastname : "Jass"
    }
  }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3 ={...obj1,...obj2}
console.log(obj3)

const users =[
  {
id:1,
email:"aman123@gmail.com"
},
{
  id:2,
  email:"aman456@gamil.com"
}
]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));