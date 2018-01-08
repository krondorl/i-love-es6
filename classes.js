class Animal {
  constructor(t, n) {
    this.type = t;
    this.name = n;
  }

  get name() {
    return this._name;
  }

  set name(_n) {
    this._name = _n;
  }

  get type() {
    return this._type;
  }

  set type(_t) {
    this._type = _t;
  }
}

class Dog extends Animal {
  constructor(n) {
    super('dog', n);
  }

  sound() {
    return 'Bark.';
  }
}

class Cat extends Animal {
  constructor(n) {
    super('cat', n);
  }

  sound() {
    return 'Purr...';
  }
}

class Mouse extends Animal {
  constructor(n) {
    super('mouse', n);
  }

  sound() {
    return 'Squeak...';
  }
}

var dog = new Dog('Alfie');
var cat = new Cat('Sylvie');
var mouse = new Mouse('Sylvie');

console.log(`---`);
console.log('dog class');
console.log(dog.type);
console.log(dog.name);
console.log(dog.sound());
console.log(`---`);
console.log('cat class');
console.log(cat.type);
console.log(cat.name);
console.log(cat.sound());
console.log(`---`);
console.log('mouse class');
console.log(mouse.type);
console.log(mouse.name);
console.log(mouse.sound());
