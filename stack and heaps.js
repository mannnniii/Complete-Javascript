//Stack (Primitives) , Heap(Non-Primitives)

let myYoutubename = "amangmaildotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); //amangmaildotcom
console.log(anothername); //chaiaurcode


let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aman@google.com"

console.log(userOne.email);
console.log(userTwo.email);