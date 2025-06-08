// const user = {
//     name: "Aditya",
//     greet: function () {
//       console.log(`Hello, ${this.name}`);
//     },
//   };
   
//   user.greet()

//   const button = document.querySelector("button");
   
//   function greet(location,age){
//       console.log(this.name,location,age)
//   }
   
//   // greet
   
//   greet()
   
//   let x = "Aditya";
   
//   greet.call(user,"Bhubaneswar",21);
   
//   greet.apply(user,["Bhubaneswar",21]);
   
//   const fn = greet.bind(user,"Bhubaneswar");
//   fn(21)
   
   
  
//   button.addEventListener("click", user.greet);


// const promise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve('resolved');
//     }
//     else{
//         reject('rejected');
//     }
// })
// promise.then((result)=> console.log('its resolved', result))
// .catch((error) => console.log(error))
// // const myFn = async function (){
// //     console.log('async start');
// //     const result = await promise;
// //     console.log('async');
// // }
// // myFn();
// // console.log('end');




// function add(a,b,c){
//     return a+b+c;
// }
// let num = [1,2,3];
// console.log(add(...num));

// function add2(...nums){
//     return nums.reduce((acc, num1) => {return num1+acc},0);
// }
// console.log(add2())










// function add4(...args){
//     return args.reduce((acc,args1) => { return acc+args1},0);
// }
// console.log(add4(1,2,3));
// const nums4 = [1,2,3,4,5,6];
// console.log(add4(...nums4))
// const [var1, var2, var3] = num;
// console.log(var2);
const abc = () => {
    console.log(this);
}
const obj3 = {
    name: 'Kutaa',
    pray: abc
}
obj3.pray()
const obj2 = {
    name: 'Niha',
    age: 22,
    greet: () => {
        console.log(this)
    }
}
obj2.greet()
// const {name, age} = obj2;
// console.log(age)