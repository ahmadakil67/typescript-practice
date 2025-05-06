{
  // Type Alias
  type User1 = {
    name: string;
    age: number;
  };
  // const user1: User1 = {
  //     name: "Ahmad Akil",
  //     age: 25,
  // }
  type UserWithRole1 = User1 & { role: string };
  const user1: UserWithRole1 = {
    name: "Ahmad Akil",
    age: 25,
    role: "Manager",
  };

  //Interface
  interface User2 {
    name: string;
    age: number;
  }
  // const user2: User2 = {
  //     name: "Akil Ahmad",
  //     age: 24,
  // }
  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user2: UserWithRole2 = {
    name: "Akil Ahmad",
    age: 24,
    role: "HRM",
  };

  // Type Alias & Interface for Array
  type ROLL_typealias = number[];
  interface ROLL_interface {
    [index: number]: number;
  }
  const RollNumber: ROLL_interface = [1, 2, 3, 4];
  console.log(RollNumber);

  // Type Alias & Interface for Function
  type ADD_typealias = (num1: number, num2: number) => number;
  interface ADD_interface{
    (num1: number, num2: number): number;
  }
  const add:ADD_typealias = (num1: number, num2: number) => num1 + num2;
}
