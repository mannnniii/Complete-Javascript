function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("N");
  console.log("I");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
  //console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {
  //  let result = number1 + number2
  //  console.log("aman")
  //  return result
  return number1 + number2
}
const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in `
}

//console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("Aman"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1
}

// console.log(calculateCartPrice(200, 300, 400, 600, 700))

const user = {
  username: "aman",
  price: 500
}
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 300, 500]

function returnSecondValue(getArray) {
  return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([300, 400, 700]))