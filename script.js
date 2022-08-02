// created object to store animal information
class Animal {
  constructor(type, health) {
    this.type = type;
    this.health = health;
  }
};

// created new object for each type of animal
const a = new Animal('monkey', 100.00);
const b = new Animal('giraffe', 100.00);
const c = new Animal('elephant', 100.00);

console.log(a);