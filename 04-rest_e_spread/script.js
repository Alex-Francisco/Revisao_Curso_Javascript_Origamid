function showList(empresa, ...clientes) {
  console.log(empresa); // Origamid
  console.log(clientes); // Retorna uma array -> ["João", "Maria", 10]
}

showList("Origamid", "João", "Maria", 10);


// spread

const numeros = [1, 2, 4, 29, 32, 2, 45, 3];
console.log(Math.max(...numeros)); // espalha a array numeros, seria o mesmo quer passar de um em um (1, 2, 4, ...)



// querySelectorAll('li') retorna uma nodeList que parece um array, mas não é
const itens = document.querySelectorAll('li');

itens.forEach(item => {
  console.log(item);
})

console.log(itens);


/*
// map não funcionaria numa nodeList - A diferença entre forEach e map, é que a map retorna um novo array
const itens1 = document.querySelectorAll('li');
itens1.map(item => {
  console.log(item);
});

console.log(itens1);
*/


// transformando arrayLike em uma array

const itens2 = Array.from(document.querySelectorAll('li'));
itens2.map(item => {
  console.log(item);
});

console.log(itens2);

// ou transforma em array assim

const itens3 = document.querySelectorAll('li');
[...itens].map(item => {
  console.log(item);
});

console.log(itens3);


// clonar objetos (não é uma cópia perfeita)

const carro = { cor: "Azul", portas: 4, ano: 2020 };

const cloneCarro = { ...carro, turbo: true };

console.log(carro);
console.log(cloneCarro);