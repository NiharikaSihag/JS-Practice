// let a = 10;
// {
//     let a = 100;
//     console.log(a);
// }
// console.log(a); 


const p1 = new  Promise((resolve) => setTimeout( () =>  resolve('Timedout promise'), 1000));
const p2 = Promise.resolve("Resolved 2");
const p3 = Promise.reject("Failed");
const p4 = new  Promise((resolve) => setTimeout( () =>  resolve('Timedout promise'), 10));
const p5 = new Promise( (_, reject) => setTimeout( () => reject('Failed 2nd'), 1000 ));


Promise.all([p1,p2,p3,p4,p5])
.then((result) => console.log('passed alll', result)).catch((error) =>  console.log(error));

Promise.allSettled([p1, p2, p3, p4, p5])
  .then((results) => console.log(results)).catch((error) =>  console.log(error));
