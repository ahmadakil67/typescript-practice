"use strict";
{
    // Polymorphism 
    class Person {
        getSleep() {
            console.log("I am sleeping for 8 hours per day.");
        }
    }
    class Student extends Person {
        getSleep() {
            console.log("I am sleeping for 7 hours per day.");
        }
    }
    class Developers extends Person {
        getSleep() {
            console.log("I am sleeping for 6 hours per day.");
        }
    }
    const getSleepHours = (param) => {
        param.getSleep();
    };
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developers();
    // person1.getSleep()
    // person2.getSleep()
    // person3.getSleep()
    // getSleepHours(person1);
    // getSleepHours(person2);
    // getSleepHours(person3);
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Reactangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShapeArea = (param) => {
        console.log(param.getArea());
    };
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Reactangle(10, 20);
    getShapeArea(shape3);
}
