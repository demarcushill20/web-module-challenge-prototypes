// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  // Assigns the 'name' argument to the 'name' property of the instance
  this.name = name;
  // Assigns the 'age' argument to the 'age' property of the instance
  this.age = age;
  // Initializes the 'stomach' property of the instance as an empty array
  this.stomach = [];
}

// Defines the 'eat' method on the prototype of the constructor
Person.prototype.eat = function(food) {
  // Checks if the 'stomach' array of the instance has fewer than 10 items
  if (this.stomach.length < 10) {
    // Adds the 'food' argument to the 'stomach' array of the instance
    this.stomach.push(food);
  }
};

// Defines the 'poop' method on the prototype of the constructor
Person.prototype.poop = function() {
  // Empties the 'stomach' array of the instance
  this.stomach = [];
};

// Defines the 'toString' method on the prototype of the constructor
Person.prototype.toString = function() {
  // Returns a string with the 'name' and 'age' properties of the instance
  return this.name + ", " + this.age;
};

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  // Initializes the 'model' property of the instance with the 'model' argument
  this.model = model;
  // Initializes the 'milesPerGallon' property of the instance with the 'milesPerGallon' argument
  this.milesPerGallon = milesPerGallon;
  // Initializes the 'tank' property of the instance to 0
  this.tank = 0;
  // Initializes the 'odometer' property of the instance to 0
  this.odometer = 0;
}

// Defines the 'fill' method on the prototype of the constructor
Car.prototype.fill = function(gallons) {
  // Adds the 'gallons' argument to the 'tank' property of the instance
  this.tank += gallons;
};

// Defines the 'drive' method on the prototype of the constructor
Car.prototype.drive = function(distance) {
  // Calculates the maximum distance that the car can travel with the current amount of fuel
  var maxDistance = this.tank * this.milesPerGallon;
  // Determines the actual distance that the car can travel based on the available fuel and the specified distance
  var actualDistance = distance < maxDistance ? distance : maxDistance;
  // Updates the 'odometer' property of the instance with the actual distance driven
  this.odometer += actualDistance;
  // Updates the 'tank' property of the instance based on the actual distance driven and the miles per gallon of the car
  this.tank -= actualDistance / this.milesPerGallon;

  // Checks if the car has run out of fuel
  if (this.tank <= 0) {
    // Returns a string indicating that the car has run out of fuel
    return "I ran out of fuel at " + this.odometer + " miles!";
  }
};


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  // Calls the Person constructor with the 'name' and 'age' arguments to initialize the respective properties of the instance
  Person.call(this, name, age);
  // Initializes the 'favoriteToy' property of the instance with the 'favoriteToy' argument
  this.favoriteToy = favoriteToy;
}

// Sets up the prototype chain to inherit from the Person prototype
Baby.prototype = Object.create(Person.prototype);

// Defines the 'play' method on the prototype of the constructor
Baby.prototype.play = function() {
  // Returns a string indicating that the baby is playing with its favorite toy
  return "Playing with " + this.favoriteToy;
};

// Sets the constructor property of the Baby prototype to the Baby constructor
Baby.prototype.constructor = Baby;
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global Binding: When this is used in a function that is called in the global scope, this will refer to the global object (e.g., window in a browser environment). For example, if you call a function with this inside it without an object context, this will refer to the global object.
  2. Implicit Binding: When this is used in a function that is called as a method of an object, this will refer to the object that the method is called on. In other words, the object before the dot is the this context for the method. For example, if you call a method on an object with this inside it, this will refer to the object.
  3. New Binding: When this is used in a constructor function, this will refer to the specific instance of the object that is being created. In other words, this is bound to the new object that is being created by the constructor. For example, if you use the new keyword to create an instance of a constructor function, this will refer to the newly created instance.
  4. Explicit Binding: When this is used with methods like call, apply, or bind, this is explicitly set to the object passed as an argument. In other words, the first argument of these methods sets the this context for the function being called. For example, if you use the call method to call a function with a specific object as the this context, this will refer to the object passed as the first argument to call.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
