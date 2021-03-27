const menu = {
  class: '.principal',
  ativar() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  },
};

menu.ativar();


//document é um  objeto e querySelector é um método de document -> .querySelector()
//console é um objeto e log é um método de console -> .log()