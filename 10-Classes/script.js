// Classes

class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);
  }
}

const scroll = new SmoothScroll("a[href^='#']");
console.log(scroll.linkElements);



