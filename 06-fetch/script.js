// Fetch

/*
Envia requisições assíncronas para o servidor. Serve para acessarmos / escrevermos dados em apis externas.
*/

fetch("https://viacep.com.br/ws/01001000/json/")
  .then(resposta => {
    return resposta.json();
  }) // tudo em uma linha para retorno de 1 item .then(resposta => resposta.json())

  .then(jsonBody => {
    document.querySelector("#app").innerHTML = jsonBody.cep;
    console.log(jsonBody);
  });
