const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//   console.log(`acc: ${acc} and currval ${currval}`);
//   return acc + currval
// },0)

const myTotal = myNums.reduce ( (acc,curr) => acc+curr,0)

console.log(myTotal);


const ShoppingCart = [
{
  itemName : "js Course",
  price:999
},
{
  itemName: "Djanjo Course",
  price:1200
},
{
itemName:"python Course",
price:1500
},
{
  itemName:"Andriod Course",
  price:5000
},
{
  itemName:"Machine Learning Course",
  price:12000
},
{
  itemName:"Game Dev",
  price:25000
}

]

const pricetopay = ShoppingCart.reduce((acc,item) =>acc + item.price,0)

console.log(pricetopay);