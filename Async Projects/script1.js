// generate a random color

const randomColor = () => {
  const hex = "0123456789ABCDEF"
  let color = "#"
  for (let i= 0; i<6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color ;
};
let intervelId;
const startchangingcolor = ()=>{
if (!intervelId) {
  intervelId = setInterval(changebgcolor, 1000);
}

function changebgcolor()  {
  document.body.style.backgroundColor = randomColor();
}

};

const stopchangingcolor =()=>{
  clearInterval(intervelId)
  intervelId = null;
}


document.querySelector("#start").addEventListener('click',startchangingcolor)

document.querySelector("#stop").addEventListener('click',stopchangingcolor)