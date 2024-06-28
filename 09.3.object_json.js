//Object de-structure and JSON API intro

const course ={
  coursename: "js in hindi",
  price:"999",
  couresInstructor: "hitesh"
}

// course.couresInstructor

const {couresInstructor : instructor} =course

//console.log(couresInstructor);
console.log(instructor)

// {
//   "name":"aman",
//   "coursename":"js in hindi",
//   "Price":"free"
// }

[
{},
{},
{}
]