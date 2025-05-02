{

    //Generic Type
    type GenericType<T> = Array<T>;

    // const userName: string[] = ["Korim", "Rohim", "Mokles"];
    const userName: GenericType<string> = ["Korim", "Rohim", "Mokles"];

    // const userID: number[] = [1, 2, 3];
    const userID: GenericType<number> = [1, 2, 3];


    // const userAuth: boolean[] = [true, false, true];
    const userAuth: GenericType<boolean> = [true, false, true];


    // Generic Array
    interface User{name: string, age: number}
    const user: GenericType<User> = [
        {
            name: "Akil",
            age: 25
        },
        {
            name: "Korim",
            age: 30,
        }
    ]


    //Generic Tuple
    type GenericTuple<X, Y> = [X, Y];
    const userDetails: GenericTuple<number, {name: string, age: number}> = [1751578424, {name: "Akil", age: 25}];
    console.log(userDetails[0]);
}