
function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY)
}

//mousemove é um objeto com várias propriedades
document.documentElement.addEventListener('mousemove', handleMouseMove);

// desestruturando
function handleMouseMove1(event) {
  const {clientX, clientY, target} = event;
  console.log(clientX, clientY);
}

//ou

function handleMouseMove2({clientX, clientY}) {
  console.log(clientX, clientY);
}


// pode ser feito com array
const frutas = ["Banana", "Uva"];
const [fruta1, fruta2] = frutas; //assim
console.log(fruta1, fruta2);
