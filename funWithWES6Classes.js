//Fun with ES6 Classes #2 - Animals and Inheritance

class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  class Shark extends Animal {
    constructor(nameShark,ageShark,statusShark){
        super();
        this.name = nameShark;
        this.age = ageShark;
        this.legs = 0;
        this.species = 'shark';
        this.status = statusShark;
    }
  }

  class Cat extends Animal{
    constructor(nameCat,ageCat,statusCat){
        super();
        this.name = nameCat;
        this.age = ageCat;
        this.legs = 4;
        this.species = 'cat';
        this.status = statusCat;
    }
    introduce() {
        super.introduce();
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
      }
  }

  class Dog extends Animal{ 
    constructor(nameDog, ageDog, statusDog, master) {
      super();
      this.name = nameDog;
      this.age = ageDog;
      this.legs = 4;
      this.species = 'dog';
      this.status = statusDog;
      this.master = master;
    }
    introduce() {
        super.introduce();
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    greetMaster() {
        return `Hello ${this.master}`;
      }
  }

  //Fun with ES6 Classes #1 - People, people, people
  //Define a class Person with the following properties:

// A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
// A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
// A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
  class Person{
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    sayFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName){
        return `Welcome to Planet Earth ${raceName}`;
    }
}