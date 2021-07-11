function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

function Fish() {}
function Person() {}
mixin(Fish.prototype, canEat, canSwim);
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
const fish = new Fish();
