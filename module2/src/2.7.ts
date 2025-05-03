{
    // Generic Constraints with Key Operator
    type Vehicle = {
        bike: string,
        car: string,
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; //manually
    type Owner1 = keyof Vehicle;

    const person: Owner = 'bike';
    // console.log(person);

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user= {
        name: "Ahmad Akil",
        age: 25,
        email: "akil@gmail.com"
    }
    const res = getPropertyValue(user, "name");
    console.log(res);
    console.log(user["email"]);
}