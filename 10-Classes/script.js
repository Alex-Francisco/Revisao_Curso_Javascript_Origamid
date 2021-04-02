// Classes

class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);

    this.addClickEvent();
  }
  handleClick(event) {
    console.log(event);
  }
  addClickEvent() {
    this.linkElements.forEach(link => {
      link.addEventListener("click", this.handleClick);
    })
  }
}

const scroll = new SmoothScroll("a[href^='#']");



