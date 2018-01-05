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

var dog = new Animal('dog', 'Alfie');

console.log('dog class');
console.log(dog.type);
console.log(dog.name);
