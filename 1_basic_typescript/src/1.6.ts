
//Normal Function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
console.log(add(2));

//Arrow Function
const addArrow = (num1:number, num2:number):number => num1+num2

//Function into Object == Method 
const MyBalance = {
    name: "Ahmad Akil",
    balance: 1000,
    totalBalance(balance:number): string{
        return `Total Balance: ${this.balance + balance}`
    },
}
console.log(MyBalance.totalBalance(1234))



// Map over the array
const arr: number[] = [1, 2, 3, 4, 5]

const newArray: number[] = arr.map((elem: number) => elem**2);
console.log(newArray);