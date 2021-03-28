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