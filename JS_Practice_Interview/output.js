// function Add(){
//     console.log(answer)
//     var answer = 2
// };
// Add()


// const obj = {foo:1};
// obj.bar = 2;
// console.log(obj)



// function checkAge(data) {
//  if (data === { age: 18 }) {
//  console.log("You are an adult!");
//  } else if (data == { age: 18 }) {
//  console.log("You are still an adult.");
//  } else {
//  console.log(`Hmm.. You don't have an age I guess`);
//  }
// }

// checkAge({ age: 18 });




// console.log(typeof (new (class { class () {} })))



// let num1=2;
// let num2=02;
// if(num1==num2)
//  console.log("true");
// else
//  console.log("false");


// function Person(firstName, lastName) {
//  this.firstName = firstName;
//  this.lastName = lastName;
// }
// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {

// return `${this.firstName} ${this.lastName}`;

// };
// console.log(member.getFullName());




//  function Person(firstName, lastName) {
//  this.firstName = firstName;
//  this.lastName = lastName;
// }
// const member = new Person('Lydia', 'Hallie');
// var getFullName = function() {

// return `${this.firstName} ${this.lastName}`;

// };
// console.log(getFullName(member));

// function Person(firstName, lastName) {
// this.firstName = firstName;
// this.lastName = lastName;
// }
// // const lydia = new Person('Lydia', 'Hallie');
// const sarah = new Person('Sarah');
// // console.log(lydia);
// console.log(sarah);



const bird = {
 size: 'small',
};

const mouse = {
 name: 'Mickey',
 small: true,
};

// console.log(mouse.bird.size)
console.log(mouse[bird.size])
console.log(mouse[bird['size']])



const shape = {
 radius: 10,
 diameter() {
 return this.radius * 2;
 },
 perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());