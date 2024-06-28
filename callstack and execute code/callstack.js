//How does js execute code + call stack

function one() {
  console.log("one")
  two()
}
function two() {
  console.log("two")
  three()
}
function three(params) {
  console.log("three")
}

one()
two()
three()

