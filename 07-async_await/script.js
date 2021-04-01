// Async e Await

/*
Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar o código.
*/

async function fetchCep(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetch("https://viacep.com.br/ws/01001000/json/")
  
