class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  printAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hello! My name is ${this.firstName}!`);
  }
}

const jack = new Person('Jack', 2000);

console.log(jack);
jack.printAge();

console.log(jack.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(jack) === Person.prototype);

// Person.prototype.greet = function () {
//   console.log(`Hello! My name is ${this.firstName}!`);
// };

jack.greet();
