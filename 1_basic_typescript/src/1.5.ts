const user:{
    readonly institute: "PH";
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
    Age: number;
} = {
    institute: "PH",
    firstName: "Ahmad",
    lastName: "Akil",
    isMarried: false,
    Age: 25,
}

user.lastName = "Rejbi";
// user.institute = "PH";

console.log(user);