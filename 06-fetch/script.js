// Fetch

/*
Envia requisições assíncronas para o servidor. Serve para acessarmos / escrevermos dados em apis externas.
*/

fetch("https://viacep.com.br/ws/01001000/json/");

const requisicao = fetch("https://viacep.com.br/ws/01001000/json/").then(resposta => {
  console.log(resposta);
});
console.log(requisicao);