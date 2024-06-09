// 1. Використовуйте функцію-конструктор, щоб реалізувати автомобіль – Car. Автомобіль має властивості name та speed. Властивість speed – це поточна швидкість автомобіля в км/год.
// 2. Реалізуйте метод accelerate(), який збільшує швидкість автомобіля на 5 та записує нову швидкість у консоль.
// 3. Реалізуйте метод break(), який знижує швидкість автомобіля на 5 і записує нову швидкість консоль.
// 4. Створіть 2 об'єкти Car та поекспериментуйте з викликами методів accelerate() та break() кілька разів для кожного з них.

// Тестові дані:
// Дані для автомобіля 1: Honda їде зі швидкістю 120 км/год.
// Дані для автомобіля 2: BMW їде зі швидкістю 150 км/год.

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
  console.log(`${this.name} рухається зі швідкісттю ${this.speed} км/г.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.name} рухається зі швідкісттю ${this.speed} км/г.`);
};

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();

bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
