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