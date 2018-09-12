// `
// Создай функцию extractOddItems(arr), которая принимает
// аргументом массив или массивоподобный объект,
//  и возвращает новый массив, в котором находятся только элементы с нечетным индексом.
// `;
// `
// Написать функцию createKeeper(), которая возвращает объект с 2 методами put(key, value)
// и get(key). Метод get(key) должен возвращать данные, которые были сохранены с помощью метода put,
// если вызывается с тем-же значением key, что и put.Ключами могут быть как
// объекты, так и примитивы,
// про NaN не задумываться. Если put был вызван с таким ключом, с которым уже был вызван ранее,
// старое значение перезатирается новым.
// Доступ к ключам и значениями должен быть возможен только через методы put и get.
// `;
//
// // function oddItems(arr) {
// //   return [...arr].reduce((arrWithOddEl, el, i) => {
// //     if (i % 2 !== 0) {
// //       return arrWithOddEl;
// //     }
// //     return [...arrWithOddEl, el];
// //   }, []);
// // }
//
// //  for...in
//
// // const SYM = Symbol('Symbol');
// //
// // const o = {
// //   a: 1, b: 2, c: 3, [SYM]: 4,
// // };
// // //
// // for (const prop in o) {
// //   if (!o.hasOwnProperty(prop)) {
// //     continue;
// //   }
// //   console.log(`${prop}: ${o[prop]}`);
// // }
//
// // function F() {
// //   this.f = 1;
// // }
// // //
// // F.prototype.z = 3;
// // //
// // const f = new F();
// // console.log(f);
// // //
// // for (const prop in f) {
// //   if (!f.hasOwnProperty(prop)) {
// //     continue;
// //   }
// //   console.log(`${prop}: ${f[prop]}`);
// // }
//
// // const SYM = Symbol('');
// // const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
// // Object.defineProperty(o, SYM, {
// //   enumerable: true,
// // })
// // Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));
// // function F() {
// //   this.f = 1;
// // }
// // //
// // F.prototype.z = 3;
// // //
// // const f = new F();
// // //
// // Object.keys(f)
// //   .forEach(prop => console.log(`${prop}: ${f[prop]}`));
//
//
// /*
//  *Class and Instance Creation
//  */
//
// // class Car {
// //   constructor() {
// //   }
// // }
// // //
// // const car1 = new Car();
// // //
// // console.log(car1 instanceof Car); // true
// // console.log(car1 instanceof Array);
//
//
// // class Car {
// //   constructor(make, model) {
// //     this.make = make;
// //     this.model = model;
// //     this.userGears = ['P', 'N', 'R', 'D'];
// //     [this.userGear] = this.userGears;
// //   }
// //
// //   shift(gear) {
// //     if (this.userGears.indexOf(gear) < 0) {
// //       throw new Error(`Invalid gear: ${gear}`);
// //     }
// //     this.userGear = gear;
// //   }
// // }
// // //
// // const car1 = new Car('Tesla', 'Model S');
// // const car2 = new Car('Mazda', 'CX-5');
// // console.log(car1);
// // console.log(car2);
// // console.log(car1.userGear);
// // console.log(car2.userGear);
// // car1.shift('D');
// // car2.shift('R');
// //
// // console.log(car1.userGear);
// // console.log(car2.userGear);
//
// /*
//  * Dynamic Properties
//  */
//
//
// // class Car {
// //   constructor(make, model) {
// //     this.make = make;
// //     this.model = model;
// //     this._userGears = ['P', 'N', 'R', 'D'];
// //     [this._userGear] = this._userGears;
// //   }
// //
// //   get userGear() { return this._userGear; }
// //
// //   set userGear(value) {
// //     if (this._userGears.indexOf(value) < 0) {
// //       throw new Error(`Invalid gear: ${value}`);
// //     }
// //     this._userGear = value;
// //   }
// //
// //   shift(gear) { this.userGear = gear; }
// // }
// //
// // const car1 = new Car('Tesla', 'Model S');
// // const car2 = new Car('Mazda', 'CX-5');
// // console.log(car1);
// // console.log(car2);
// // console.log(car1.userGear);
// // console.log(car2.userGear);
// // car1.shift('D');
// // car2.shift('R');
// //
// // console.log(car1.userGear);
// // console.log(car2.userGear);
//
// // const Car = (function() {
// //   const carProps = new WeakMap();
// //
// //   class Car {
// //     constructor(make, model) {
// //       this.make = make;
// //       this.model = model;
// //       const userGears = ['P', 'N', 'R', 'D'];
// //       carProps.set(this, { userGear: userGears[0], userGears });
// //     }
// //
// //     get userGear() { return carProps.get(this).userGear; }
// //
// //     set userGear(value) {
// //       if (carProps.get(this).userGears.indexOf(value) < 0) {
// //         throw new Error(`Invalid gear: ${value}`);
// //       }
// //       carProps.get(this).userGear = value;
// //     }
// //
// //     shift(gear) { this.userGear = gear; }
// //   }
// //
// //   return Car;
// // })();
// //
// // const car1 = new Car('Tesla', 'Model S');
// // const car2 = new Car('Mazda', 'CX-5');
// // console.log(car1);
// // console.log(car2);
// // console.log(car1.userGear);
// // console.log(car2.userGear);
// // car1.shift('D');
// // car2.shift('R');
// //
// // console.log(car1.userGear);
// // console.log(car2.userGear);
// //
// // const Car = (function() {
// //   const userGears = Symbol('userGears');
// //   const userGear = Symbol('userGears');
// //
// //   class Car {
// //     constructor(make, model) {
// //       this.make = make;
// //       this.model = model;
// //       this[userGears] = ['P', 'N', 'R', 'D'];
// //       [this[userGear]] = this[userGears];
// //     }
// //
// //     get userGear() { return this[userGear]; }
// //
// //     set userGear(value) {
// //       if (this[userGears].indexOf(value) < 0) {
// //         throw new Error(`Invalid gear: ${value}`);
// //       }
// //       this[userGear] = value;
// //     }
// //
// //     shift(gear) { this.userGear = gear; }
// //   }
// //
// //   return Car;
// // })();
// // //
// // const car = new Car('Tesla', 'Model S');
// // console.log(car);
// // console.log(car.userGear);
// // car.shift('D');
// // console.log(car.userGear);
//
//
// /*
// Classes Are Functions
//  */
//
// // function Car(make, model) {
// //   this.make = make;
// //   this.model = model;
// //   this._userGears = ['P', 'N', 'R', 'D'];
// //   this._userGear = this.userGears[0];
// // }
// //
// // class Es6Car {}
// //
// // function Es5Car() {};
// // console.log(typeof Es6Car);
// // console.log(typeof Es5Car);
//
// /*
//  Prototype
//  */
// // function Foo() {};
// // Foo.prototype.a = 2;
// // const foo = new Foo();
// // console.log(foo);
// // console.log(foo.__proto__ === Foo.prototype);
// // console.log(foo.prototype === undefined);
// // foo.__proto__ = { a: 1 };
// // console.log(foo);
// //
// // const car1 = new Car();
// // const car2 = new Car();
// // console.log(car1.shift === Car.prototype.shift);
// // car1.shift('D');
// // console.log(car1.userGear); // 'D'
// // console.log(car1.shift === car2.shift) // true
// // car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
// // console.log(car1.shift === Car.prototype.shift); // false
// // console.log(car1.shift === car2.shift); // false
// // console.log(car1.shift('d'));
// // console.log(car1.userGear);
//
//
// /*
//   Static
//  */
//
// // class Car {
// //   static getNextVin() {
// //     return Car.nextVin++;
// //   }
// //
// //   constructor(make, model) {
// //     this.make = make;
// //     this.model = model;
// //     this.vin = Car.getNextVin();
// //   }
// //
// //   static areSimilar(car1, car2) {
// //     return car1.make === car2.make && car1.model === car2.model;
// //   }
// //
// //   static areSame(car1, car2) {
// //     return car1.vin === car2.vin;
// //   }
// // }
// // //
// // Car.nextVin = 0;
// // const car1 = new Car('Tesla', 'S');
// // const car2 = new Car('Mazda', '3');
// // const car3 = new Car('Mazda', '3');
// // console.log(car1.vin); // 0
// // console.log(car2.vin); // 1
// // console.log(car3.vin); // 2
// // console.log(Car.areSimilar(car1, car2)); // false
// // console.log(Car.areSimilar(car2, car3)); // true
// // console.log(Car.areSame(car2, car3)); // false
// // console.log(Car.areSame(car2, car2));
//
//
// /*
//  Inheritance
//  */
//
// class Vehicle {
//   constructor() {
//     this.passengers = [];
//     console.log('Vehicle created');
//   }
//
//   addPassenger(p) {
//     this.passengers.push(p);
//   }
// }
// //
// class Car extends Vehicle {
//   constructor() {
//     super();
//     console.log('Car created');
//   }
//
//   addPassenger(p) {
//     console.log('Hi all');
//     super.addPassenger(p);
//   }
//
//   deployAirbags() {
//     console.log('BWOOSH!');
//   }
// }
// // //
// const v = new Vehicle();
// v.addPassenger('Frank');
// v.addPassenger('Judy');
// console.log(v.passengers);
// const c = new Car();
// c.addPassenger('Alice');
// c.addPassenger('Cameron');
// console.log(c.passengers);
// // v.deployAirbags(); // error
// c.deployAirbags();
// console.log(c instanceof Vehicle);
//
//
// // class Car {
// //   constructor(make, model) {
// //     this.make = make;
// //     this.model = model;
// //   }
// //
// //   toString() {
// //     return `${this.make} ${this.model}`;
// //   }
// // }
// //
// // console.log(`${new Car('mazda', 'cx5')}`)
// //
// //
// // class ReversedString extends String {
// //   print() {
// //     return this.split('').reverse().join('');
// //   }
// // }
const b = { a: 1 };
