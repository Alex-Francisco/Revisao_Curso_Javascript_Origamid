// Arrays

// Map, filter e reduce retornam uma array nova, não modificando a original

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
];

const precosFiltro = precos.filter(preco => {
  return preco.includes("R$");
});

const precosNumeros = precosFiltro.map(function(preco) {
  console.log(preco);
});

console.log(precosFiltro);
