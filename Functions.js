// function add(a,b){
//     return a+b;
// }

// console.log(add(4,5));


// Passing function as an argument
// function Fnname(myName){
//     console.log(myName);
// }
// function greet(callback){
//     let myName = 'Niharika';
//     return callback(myName);
// }
// greet(Fnname);

// // returning function
// function multiple(factor){
//     return function (num){
//         return num*factor;
//     }
// }
// console.log(multiple(5)(5));


// const number = [1,23,3];
// const doubled = number.map(n => n*2);
// console.log(doubled);





// Questions

// function a(){
//     console.log('1st');
// }

// function a(){
//     console.log('2nd');
// }

// a();

// wrong answer
 
 
// var test = 100;
 
// function test() {
//     console.log('test is function');
// }

// console.log(test);
// test();



// This is a function expression
// const greet = function(name) {
//   return `Hello, ${name}!`;
// };

// console.log(greet("Alice")); // "Hello, Alice!"
// // console.log(sum.sumIt(4,5));

// const sum = function sumit(a,b){
//     return `${a+b}`
// }
// console.log(sum(4,5))

// function x(){
//     console.log(this)
// }
// x()
const y = () => {
    console.log(this);
}
y();
const obj2 = {
    a: 20,
    const: 40,
    var: 50,
    function: 70,
    x: function(){
        const y = () => {
            console.log(this)
        }
        y();
    }
}
obj2.x();
console.log(obj2.const);
console.log(obj2.function);

