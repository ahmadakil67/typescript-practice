"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`${user.name} is an admin`);
        }
        else {
            console.log(`${user.name} is an user`);
        }
    };
    const normalUser = {
        name: "Ahmad Akil"
    };
    const adminUser = {
        name: "Akil",
        role: "admin"
    };
    getUser(normalUser);
}
