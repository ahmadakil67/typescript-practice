"use strict";
{
    // OOP --> Class
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("German Shepared", "dog", "ghew ghew");
    const cat = new Animal("Pershian", "cat", "meaw meaw");
    cat.makeSound();
}
