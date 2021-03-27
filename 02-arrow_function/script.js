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


const countLetters = word => word.length;
document.write(countLetters("Alex"));

/* principal diferença entre uma function normal e uma arrow function é a questão
do This dentro dela */

/*
class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', function(event) {
      event.target.classList.add('active');
    });
  }
}
*/

/*
class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', function(event) {
      event.target.classList.add(this.activeClass); // Não funciona, this agora faz referência a this.menuElement
      // a function() cria um novo this, o caso ele perde a referência de class Menu
      // com arrow function não é criado um novo this
    });
  }
}
*/

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    this.menuElement.addEventListener('click', event => {
      event.target.classList.add(this.activeClass); // Não funciona, this agora faz referência a this.menuElement
      // a function() cria um novo this, o caso ele perde a referência de class Menu
      // com arrow function não é criado um novo this
    });
  }
}

const menu = new Menu('.principal');
menu.addActiveEvent();
