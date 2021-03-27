function upperName1(name) {
  return name.toUpperCase();
}

document.write(upperName1('alex'));
document.write('<br>');


const upperName2 = function(name) {
  return name.toUpperCase();
};

document.write(upperName2('francisco'));
document.write('<br>');


const upperName3 = name => {
  return name.toUpperCase();
}

document.write(upperName3('silva'));
document.write('<br>');



// se tiver só uma linha retornada, não precisa passar as {} e pode tirar o return
const upperName4 = name => name.toUpperCase();

document.write(upperName4('souza'));
document.write('<br>')



const doisParametros = (p1, p2) => {
  return p1.toUpperCase() + " " + p2.toUpperCase();
}

document.write(doisParametros('use ( )', 'quando tiver mais de 1 parâmetro'));
document.write('<br>');


