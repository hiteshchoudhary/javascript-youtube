var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = function () {
  console.log(`Your firstname is : ${this.firstName}`);
};

var hitesh = new User("hitesh", 2);
hitesh.getCourseCount();

if (hitesh.hasOwnProperty("firstName")) {
  hitesh.getFirstname();
}

//console.log(hitesh);

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstname();
//console.log(sam);
