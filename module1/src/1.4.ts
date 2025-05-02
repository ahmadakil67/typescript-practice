// Different Types of variables
let nam : string = "Ahmad Akil";
let roll : number = 123;
let isStd : boolean = true;
let x : undefined = undefined;
let salary : null = null;

//Array
let friends: string[] = ["Korim", "Rohim", "Mukles"]
let allPeople = [...friends, nam];
// console.log(allPeople);

//Tuple
let nameAge : [string, number] = ["Solim Ullah", 60];
// console.log(nameAge);

allPeople.push(nameAge[0]);
console.log(allPeople);


