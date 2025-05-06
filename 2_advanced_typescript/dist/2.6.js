"use strict";
{
    // Constraints
    const addCourseToStd = (student) => {
        const course = "Next Level Web Developer";
        return Object.assign(Object.assign({}, student), { course });
    };
    const std1 = addCourseToStd({
        id: 111,
        name: "Akil",
        email: "akil@gmail.com",
        devType: "NLWD",
    });
    const std2 = addCourseToStd({
        id: 222,
        name: "Ahmad",
        email: "ahmad@gmail.com",
        phn: 1751578424,
    });
    console.log(std1);
    console.log(std2);
}
