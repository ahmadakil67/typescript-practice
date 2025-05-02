{
    // Type Alias
    type User1 = {
        name: string;
        age: number;
    }
    // const user1: User1 = {
    //     name: "Ahmad Akil",
    //     age: 25,
    // }
    type UserWithRole1 = User1 & {role: string};
    const user1: UserWithRole1 = {
        name: "Ahmad Akil",
        age: 25,
        role: "Manager",
    }
    console.log(user1);



    //Interface
    interface User2{
        name: string;
        age: number;
    }
    // const user2: User2 = {
    //     name: "Akil Ahmad",
    //     age: 24,
    // }
    interface UserWithRole2 extends User2 {role: string};
    const user2: UserWithRole2 = {
        name: "Akil Ahmad",
        age: 24,
        role: "HRM"
    }
    console.log(user2);

}