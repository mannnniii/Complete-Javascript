const user = {
  username: "mani",
  loginCount: 9,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user deatials from database");
    // console.log(`Username: ${this.username}`);
    // console.log(this);
  }

}
// console.log(user.username);

// console.log(user.getUserDetails());

// console.log(this);


function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;


  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  }

  return this

}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("naruto", 15, false)

console.log(userOne.constructor);
// console.log(userTwo);

