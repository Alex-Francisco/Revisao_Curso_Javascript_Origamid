// Classes

class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);

    this.addClickEvent();
  }
  addClickEvent() {
    this.linkElements.forEach(link => {
      link.addEventListener("click", () => console.log("teste"));
    })
  }
}

const scroll = new SmoothScroll("a[href^='#']");



