// Fetch

/*
Envia requisições assíncronas para o servidor. Serve para acessarmos / escrevermos dados em apis externas.
*/

fetch("https://ranekapi.origamid.dev/wp-json/api/produto");

const requisicao = fetch("https://ranekapi.origamid.dev/wp-json/api/produto");
console.log(requisicao);