{
    // OOP --> Inheritance

    class commonThing{
        // name: string;
        // age: number;
        // address: string;

        constructor(public name: string, public age: number, public address: string){
            // this.name = name;
            // this.age = age;
            // this.address = address;
        }

        getSleep(numOfHr: number){
            console.log(`${this.name} sleep ${numOfHr} hours a day.`);
        }
    }

    class Student extends commonThing{
        constructor(name: string, age: number, address: string){
            super(name, age, address);
        }
    }
    const std = new Student("Akil", 24, "Sylhet");
    // std.getSleep(8);

    class Teacher extends commonThing{
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfCls: number){
            console.log(`${this.designation} ${this.name} take ${numOfCls} classes`);
        }
    }

    const teacher = new Teacher("Akil", 45, "Sylhet", "Professor");
    teacher.takeClass(5)
}