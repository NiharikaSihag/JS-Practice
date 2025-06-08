// // Scenario 1: Nested functions
// const user = {
//   name: "John",
//   greet: function() {
//     console.log(`Hello, ${this.name}`); // "Hello, John"
    
//     function innerFunction() {
//       console.log(`Inner: ${this.name}`); // "Inner: undefined" (window/global)
//     }
    
//     const innerArrow = () => {
//       console.log(`Inner arrow: ${this.name}`); // "Inner arrow: John"
//     }
    
//     innerFunction();
//     innerArrow();
//   }
// };

// // Scenario 2: setTimeout
// const timer = {
//   name: "Timer",
//   delayedRegular: function() {
//     setTimeout(function() {
//       console.log(this.name); // undefined (this = window)
//     }, 1000);
//   },
//   delayedArrow: function() {
//     setTimeout(() => {
//       console.log(this.name); // "Timer"
//     }, 1000);
//   }
// };

// // Scenario 3: Callback functions
// const data = {
//   values: [1, 2, 3],
//   process: function() {
//     // this.values is undefined because 'this' in the callback is global
//     this.values.forEach(function(value) {
//       console.log(value, this.values); // this.values is undefined
//     });
    
//     // Arrow function preserves 'this'
//     this.values.forEach((value) => {
//       console.log(value, this.values); // this.values is [1,2,3]
//     });
//   }
// };


// var nam = 'Ashim'
// const obj = {
//     nam : 'Neha',

//     greet: function(){
//         const self = this;
//         console.log(this.nam);
//         function neha(){
//             function niharika(){
//                 console.log(self.nam);
//             }
//             console.log(this.nam);
//               niharika();
//         }
//         neha();
//     }
// }
// obj.greet()

// inner();
// console.log(inner)
// var inner = 'Global';
// function inner(){
//   console.log("a");
// }
// console.log(inner)

function foo(a){
    console.log(arguments[0][0])
}
foo([1,2,3,4])






const obj2 = {
    nmae3: 'Nonu',
    age: 45,
    print (){
        console.log('Hey', this.arg)
    }
}
const obj4 = {
    arg: '4',

}
obj2.print.apply(obj4)