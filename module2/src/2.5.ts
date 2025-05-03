{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGen = <T>(param: T): T[] => {
    return [param];
  };

  interface User {
    id: number;
    name: string;
  }

  const res1 = createArrayWithGen<string>("Bangladesh");
  const res2 = createArrayWithGen<User>({ id: 222, name: "Ahmad Akil"});
  console.log(res2);
}
