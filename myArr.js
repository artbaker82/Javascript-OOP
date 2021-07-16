class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getAtIndex(key) {
    return this.data[key];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  map(cb) {
    const mappedData = new MyArray();
    for (let i = 0; i < this.length; i++) {
      mappedData.push(cb(this.data[i]));
    }
    //console.log(mappedData);
    return mappedData;
  }
}
const newArray = new MyArray();
newArray.push(10);
newArray.push(20);
newArray.push(10);
//console.log(newArray.getAtIndex(0));
newArray.map((data, i) => (data += 10));
// (function (data) {
//   data += 10;
// });
