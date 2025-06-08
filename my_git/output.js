
//   var name = "niharika";
//   var age = "23";
//   const obj = {
//          name: "niharika",
//          age: "23",
//           print: function() {
//               console.log(this.name +" "+ this.age);
//          }
//   }
  
//   obj.print();
 
  
  
  
  
  
// var name = "globalName";
// var age = "99";

// const obj2 = {
//     name: "niharika",
//     age: "23",
//     print: function() {
//         const innerArrow = () => {
//             console.log(this.name + " " + this.age);
//         };
//         innerArrow();
//     }
// };

// obj2.print();



// var x = 10;
//     (function(){
//          console.log(x);//10
//          x = 5;
//     })();
    
// var x = 24;
// console.log(x);//24

// var car="audi";
// console.log(car);
// {
//     var car="bmw";
//     {
//         car="byd";
//         console.log(car);
//     }
//     console.log(car);
// }
// console.log(car);




// for(var i=0; i<8; i++){
//      setTimeout(() => {
//          console.log(i);
//      },1000)
// }
// console.log(i);



// console.log("start");
 
//  setTimeout(() => {
//       console.log("1sec");
//  },1000);
// return new Promise((res, rej) => {
//       console.log("promise1");
//  })
//  setTimeout(() => {
//       console.log("2sec");
//  },2000);
 
//   setTimeout(() => {
//       console.log("1/2sec");
//  },500);
 

 
// console.log("start");
// setTimeout(() => {
//      console.log("1sec");
// },1000);
// new Promise((res, rej) => {
//      console.log("promise1");
// })
// setTimeout(() => {
//      console.log("2sec");
// },2000);

// new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("promise2");
//     }, 0)
// })
//  setTimeout(() => {
//      console.log("1/2sec");
// },500);
// console.log("end");


//start, , promise 1,  end, promise 2,  1/2sec 1sec , 2sec
//callstack:-[GEC ]
// micro:-[]
//macro:-[ ]
//web api:-[]



const p1 = Promise.resolve().then(() => console.log('Hey'));

console.log(p1);
