"use strict";
{
    const person = 'bike';
    // console.log(person);
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Ahmad Akil",
        age: 25,
        email: "akil@gmail.com"
    };
    const res = getPropertyValue(user, "name");
    console.log(res);
    console.log(user["name"]);
}
