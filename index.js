//all class members public
class myArr {
  constructor(items) {
    this.listItems = !items ? "" : spreadItems(items);
    this.length = !items ? 0 : getLength(this.listItems);
  }

  add(item) {
    this.listItems += `, ${item}`;
    this.length++;
  }

  getAtIndex(index) {
    // let regex = /(\w+)[^Items:]|(\d+)/g;
    // let match = this.listItems.match(regex);
    //console.log(numbers);
    let arr = this.listItems.split(", ");
    return arr[index];
  }

  // insertAtIndex(index, item) {
  //   let regex = /\d/g;
  //   let numbers = this.listItems.match(regex);
  //   numbers.splice(index, 0, item);
  //   this.listItems = numbers.join(" ");
  // }
}

const spreadItems = (items) => {
  return `Items: ${items.map((x) => x).join(", ")}`;
};

const getLength = (items) => {
  // let regex = /(\w+)[^Items:]|(\d+)/g;
  // let match = items.match(regex);
  // console.log(match);
  // return match.length;

  return items.split(", ").length;
};

const arr1 = new myArr([1, 2, 3, 4, "hello", "world"]);
