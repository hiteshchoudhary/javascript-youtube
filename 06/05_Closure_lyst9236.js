// function init() {
//   var firstName = "hitesh";
//   console.log("I am init");

//   function sayFirstName() {
//     console.log(firstName);
//   }
//   return sayFirstName;
// }

// var value = init();

// value();

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));
//doAddition()()() //curring
