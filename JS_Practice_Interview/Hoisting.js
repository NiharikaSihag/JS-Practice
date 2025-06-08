// q.1
// var a = 10;
// {
//     var a = -10;
//     console.log(a);
// }
// // b = 20; // ReferenceError: Cannot access 'b' before initialization
// console.log(a);
// // console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = a;
// {
//     let b = 50;
//     console.log(b);
// }
// console.log(a);
// console.log(b);




// q2

// a = 10; // creates a global variable implicitly (window.a)
// console.log(a);
// // Will work fine in non-strict mode but will through a refernce error in strict error 


// q3

// a = 10;
// var a;
// console.log(a); // will work fine due to var hoisting



// q4

// Impppp
// a = 10;
// let a;
// console.log(a); // ReferenceError: Cannot access 'a' before initialization


// q5
// var a ;
// let a = 5;
// console.log(a); //SyntaxError: Identifier 'a' has already been declared


// q6
// var a =10;
// var a = 40;
// console.log(a) // 40 (variable shadowing)

// q7
// var a;
// console.log(a); //undefined (memory is allocated but value is not assigned )
// a = 20;
// console.log(a); // 20


