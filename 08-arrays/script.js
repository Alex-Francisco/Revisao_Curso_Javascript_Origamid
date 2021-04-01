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

const precosFiltro = precos.filter(function(preco){
  console.log(preco);
  if (preco === "R$ 400") {
    return true;
  } else {
    return false;
  }
});

console.log(precosFiltro);
