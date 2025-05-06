{
  // type guard using typeof operator
  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

//   console.log(add(2, "3"));

  // IN guard

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`${user.name} is an admin`);
    } else {
      console.log(`${user.name} is an user`);
    }
  };

  const normalUser: NormalUser = {
    name: "Ahmad Akil"
  }
  const adminUser: AdminUser = {
    name: "Akil",
    role: "admin"
  }

  getUser(normalUser);
}
