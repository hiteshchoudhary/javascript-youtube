// const user = ["hitesh", 3, "admin"];
// // var role = user[2];
// // var name = user[0];

// var [name, courseCount, role] = user;

//console.log(role);

const MyUser = {
  name: "hitesh",
  courseCount: 5,
  role: "admin",
};

console.log(MyUser.courseCount);

const { name, courseCount, role } = MyUser;
console.log(role);
