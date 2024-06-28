//const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item)=>{
// console.log(item);
// return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) =>{
//   return num > 4
// })

// const newNums = []

// myNums.forEach( (num) =>{
// if (num > 4) {
// newNums.push(num)
// }
// })

// console.log(newNums);

const books = [
  {
    title: "Book1",
    genre: "Fiction",
    publish: "1951"
  },
  {
    title: "Book2",
    genre: "Classic",
    publish: "2001"
  },
  {
    title: "Book3",
    genre: "Dystopian",
    publish: "1949"
  },
  {
    title: "Book4",
    genre: "Classic",
    publish: "1925"
  },
  {
    title: "Book5",
    genre: "Fantasy",
    publish: "2000"
  },
  {
    title: "Book6",
    genre: "Fantasy",
    publish: "1937"
  },
  {
    title: "Book7",
    genre: "Classic",
    publish: "1813"
  }
];


// const userBooks = books.filter( (bk) =>
// bk.genre === 'Classic'
// )
const userBooks =books.filter( (bk) => {return bk.publish >= 2000 && bk.genre === "Classic"})

console.log(userBooks);
