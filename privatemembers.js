let _radius = new WeakMap();
let _move = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    _radius.set(this, value);
  }
}
let c = new Circle(12);
