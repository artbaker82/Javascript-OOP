function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(array = []) {
  this.items = array;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  };

  this.render = function () {
    //my original implementation
    //let optionList = "";
    //for (let i = 0; i < this.items.length; i++) {
    //optionList += `\t<option>${this.items[i]}</option>\n`;
    //}
    //return `<select>\n${optionList}\b\b\b</select>`;

    //using map method
    return `<select>${this.items
      .map((item) => `\n\t<option>${item}</option>`)
      .join("")} \n</select>`;
  };
}

function HtmlImageElement(src = "") {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlImageElement.prototype = new HtmlElement();

const e = new HtmlElement();
const s = new HtmlSelectElement([1, 2, 3, 4, 5]);
const img = new HtmlImageElement();

const elements = [new HtmlSelectElement([1, 2, 3]), new HtmlImageElement("http://image")];

for (let element of elements) {
  console.log(element.render());
}
