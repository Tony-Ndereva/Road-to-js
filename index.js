// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// // let name ="Mosh"   //string literal
// // let age = 30; // Number literal
// // let isApproved = false; //Boolean Literal
// // let firstName = undefined;
// // let selectedColor = null;

// // let person = {
// //   name: "Tony",
// //   age: 21,
// // };
// // //dot notation
// // person.name = "John";

// // // bracket notation
// // person["name"] = "Mary";
// // console.log(person.name);

// // let selectedColors = ["red", "blue"];
// // selectedColors[2] = 1;
// // console.log(selectedColors.length);

// //performing a task
// function greet(name, lastName) {
//   //body of the function
//   //logic of the function
//   console.log("Hello " + name + "" + lastName);
// }

// greet("John", "Smith");

// function square(number) {
//   return number * number;
// }
// let number = square(2);
// console.log(number);

// let x = 10;
// let y = 3;

// //increment operators(++)

// let points = 110;
// let type = points > 100 ? "gold" : "silver";
// console.log(type);

// let highIncome = true;
// let goodcreditScore = true;
// let eligibleforLoan = highIncome && goodcreditScore;
// console.log()
// let userColor = "";
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// let a = "red";
// let b = "blue";
// console.log(a);
// console.log(b);

// let ab = [b, a];
// console.log(ab);
// Hour
//If hour is between 6am and 12pm:Good morning!
//If hour is between 12pm and 6pm:Good Afternoon!
//Otherwise:Good evening!

// let hour = 06;
// if (hour >= 6 && hour < 12) console.log("Good Morning");
// else if (hour > 12 && hour <= 18) console.log("Good Afternoon");
// else {
//   console.log("Good evening");
// }

// let role = "guest";
// switch (role) {
//   case "guest":
//     console.log("Guest USer");
//     break;

//   case "Moderator":
//     console.log("Moderator User");
//     break;

//   default:
//     console.log("Unknown User");
// }

//loops

//forloop
// for (let i =0 ;i < 5 ; i++){
//   if (i % 2 !==0) console.log(i)
// }

//While loop
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

//do while loop

// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// let i =0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

//for -in loop
// const person = {
//   name: "Tony",
//   age: 21,
//   education: {
//     primary: "Certificate",
//     secondary: "KCSE",
//     university: "degree",
//   },
// };
// for (let key in person.education) {
//   console.log(key, person.education[key]);
// }

// const colors = ["red", "green", "blue"];
// for (let index in colors) {
//   console.log(index, colors[index]);
// }

// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   if (i%2 ===0)

//   console.log(i);
//   i++;
// }

// let number = max(15, 8);
// console.log(number);
// function max(a, b) {
//   return a > b ? a : b;
// }

// let number = isLandscape(1920, 1080);
// function isLandscape(width, height) {
//   return width > height;
// }
// console.log(number);

// const output = fizzbuzz(5);
// console.log(output);
// function fizzbuzz(input) {
//   if (typeof input !== "number") return NaN;
//   else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   else if (input % 3 === 0) return "Fizz";
//   else if (input % 5 === 0) return "Buzz";
//   else return input;
// }

//Speed Limit = 70;
// 5 -> 1point;
// Math.floor(1.3)
// 12points ->suspended
// const output = fizzBuzz(3);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 == 0 && input % 5 == 0) return "FizzBuzz";
//   if (input % 3 == 0) return "Fizz";
//   if (input % 5 == 0) return "Buzz";
//   return input;
// }

//speed limit =70;
// 5 -> 1point
//Math.floor(1.3)
//12 points -> suspended
checkSpeec(80);
function checkSpeec(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxPoints = 12;
  if (speed < speedLimit + kmPerPoint) console.log("OK!");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= maxPoints) console.log("License Suspended");
    else console.log("Points", points);
  }
}
showNumbers(10);
function showNumbers(numberLimit) {
  for (let i = 0; i <= numberLimit; i++) {
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");
  }
}

//Falsy values
//undefined
//null
// ""
//false
// 0
//NaN

//OBJECT ORIENTED PROGRAMMING(OOP)

//fACTORY FUNCTIONS
function createCircle(radius) {
  return {
    radius: radius,

    draw: function () {
      console.log("draw");
    },
  };
}
