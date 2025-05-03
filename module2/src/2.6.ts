{
  // Constraints

  const addCourseToStd = <T extends {id: number; name: string; email: string}>(student: T) => {
    const course = "Next Level Web Developer";
    return {
      ...student,
      course,
    };
  };

  const std1 = addCourseToStd<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 111,
    name: "Akil",
    email: "akil@gmail.com",
    devType: "NLWD",
  });

  const std2 = addCourseToStd<{
    id: number;
    name: string;
    email: string;
    phn: number;
  }>({
    id: 222,
    name: "Ahmad",
    email: "ahmad@gmail.com",
    phn: 1751578424,
  });

  console.log(std1);
  console.log(std2);
}
