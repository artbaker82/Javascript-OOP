const _stackItems = new WeakMap();

class Stack {
  constructor() {
    _stackItems.set(this, []);
  }
  push(item) {
    _stackItems.get(this).push(item);
  }

  pop() {
    const items = _stackItems.get(this);
    if (items.length === 0) throw new Error("stack is empty");

    return items.pop();
  }

  peek() {
    const items = _stackItems.get(this);
    if (items.length === 0) throw new Error("stack is empty");
    return _stackItems.get(this)[items.length - 1];
  }

  get count() {
    return _stackItems.get(this).length;
  }
}

const stack = new Stack();
