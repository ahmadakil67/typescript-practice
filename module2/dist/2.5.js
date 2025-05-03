"use strict";
{
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGen = (param) => {
        return [param];
    };
    const res1 = createArrayWithGen("Bangladesh");
    const res2 = createArrayWithGen({ id: 222, name: "Ahmad Akil" });
    console.log(res2);
}
