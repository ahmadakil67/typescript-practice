{
  // instanceof operator
  class Animal {
    public name: string;
    public species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal{
    constructor(name: string, species: string) {
      super(name, species)
    }
    makeBark() {
      console.log("I am Barking");
    }
  }

  class Cat extends Animal{
    constructor(name: string, species: string) {
      super(name, species)
    }
    makeMeaw() {
      console.log("I am Meawing");
    }
  }

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog
  }
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat
  }

  const getAnimal = (animal: Animal) => {
    if(isDog(animal)){
        animal.makeBark()
    }else if (isCat(animal)){
        animal.makeMeaw()
    }else{
        animal.makeSound()
    }

  }

  const dog = new Dog("German Shepared", "dog");
  const cat = new Cat("Pershian", "cat");

  getAnimal(cat);
}
