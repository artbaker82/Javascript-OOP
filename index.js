//Object literal notation
/*
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};
*/

//Factory function
/*
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);
//circle.draw();
*/

//constructor function

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = {
    x: 0,
    y: 0,
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location");

      defaultLocation = value;
    },
  });
}
const circle = new Circle(10);
circle.defaultLocation = { x: 2, y: 3 };
