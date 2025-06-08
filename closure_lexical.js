// function sum(){
//     var count = 0;
//     return function counter (){
//         count++;
//         return count;
//     }
// }
// console.log(sum());
// const counter = sum();
// console.log(counter());
// console.log(counter());
// console.log(counter());




// // lexical scope
// function outer(){
//     let msg = 'Hey';
//     function inner(){
//         console.log(msg);
//     }
//     inner();
// }
// outer();


// console.log([]+1+2);


// sum(2,3);
// function sum(a,b){
//     console.log(a+b);
// }

// task queue => resolve

// async function first() {
//   console.log("First function start");// 3
//   await new Promise(resolve => setTimeout(resolve, 0));
//   console.log("First function end");//7
//   return "First result";
// }

// async function second() {
//   console.log("Second function start");// 2
//   const result = await first();
//   console.log("Got result:", result);//4
//   console.log("Second function end");// 5
// }

// console.log("Before calling second"); //1
// await second();
// console.log("After calling second");//6

const obj2 = {
  
}
// function name1(){
//   console.log(this);
//   function num(){
//     console.log(this)
//   }
//   num()
// }
// name1()

// function constrcutIt(name5){
//   return {
//     name5: name5
//   }
// }
// const obj = constrcutIt('Niha');
// console.log(obj)

// console.log(obj instanceof constrcutIt)
// const obj2 = new constrcutIt('Nishaaa')
// console.log(obj2)
// console.log(obj2 instanceof constrcutIt)

// class mine{
//   constructor(age){
//     this.age= age;
//   }
//   setAge(age){
//     age = 500;
//   }

// }
// const obj4 = new mine(34);
// console.log(obj4)
// // const obj5 = mine(45);
// // console.log(obj5)


