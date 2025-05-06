"use strict";
{
    // OOP --> Inheritance
    class commonThing {
        // name: string;
        // age: number;
        // address: string;
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
            // this.name = name;
            // this.age = age;
            // this.address = address;
        }
        getSleep(numOfHr) {
            console.log(`${this.name} sleep ${numOfHr} hours a day.`);
        }
    }
    class Student extends commonThing {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const std = new Student("Akil", 24, "Sylhet");
    // std.getSleep(8);
    class Teacher extends commonThing {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfCls) {
            console.log(`${this.designation} ${this.name} take ${numOfCls} classes`);
        }
    }
    const teacher = new Teacher("Akil", 45, "Sylhet", "Professor");
    teacher.takeClass(5);
}
