class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}
class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog1 = new Dog("coffee", "Deshi", 1);
dog1.eat()
console.log(dog1);

class Cat extends Animal{
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }

  meow() {
    console.log(`${this.name} is barking`);
  }
}

const cat1 = new Cat("SP", "white", 5);
cat1.eat()
console.log(cat1)

// class Bird {
//     constructor(name, species, age){
//         this.name = name;
//         this.age = age;
//         this.species = species;
//     }

//     eat() {
//         console.log(`${this.name} is eating`)
//     }

//     fly(){
//         console.log(`${this.name} is flying`);
//     }
// }

// const bird1 = new Bird('kokil', 'deshi', 2)
