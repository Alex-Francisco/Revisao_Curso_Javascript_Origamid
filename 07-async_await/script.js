// Async e Await

/*
Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar o código.
*/

async function fetchCep(url) {
  const response = await fetch(url);
 console.log(response)
}

//adicionando await, ele espera a promessa ser resolvida para retornar o valor dela

fetchCep("https://viacep.com.br/ws/01001000/json/")
  
