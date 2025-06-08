// var a = 1;
// function foo() {
//   console.log(a);
//   var a = 2;
// }
// foo();


// const person =  {
//     fname: 'First name',
//     lname: 'Last Name',
//     getFullName: () => {
//         console.log(this.fname + ' ' + this.lname);
//     }
// }
// person.getFullName();


// let person = {
//     fname: 'Sahil',
//     lname: 'Shikalgar',
//     address: {
//       street: 'Pune',
//       more: {
//         pin_code: 415311,
//         getMoreAddress1: () => {
//           console.log(this); // {}
//         },
//         getMoreAddress2: function () {
//           console.log(this); // more
//         },
//       },
//     },
//     generateAddress: function () {
//       const obj = {
//         street: 'Hyd',
//         getCustomAddress1: () => {
//           console.log(this); // person
//         },
//         getCustomAddress2: function () {
//           console.log(this); // obj
//         },
//       };
//       return obj;
//     },
//   };
//   person.address.more.getMoreAddress1();
//   person.address.more.getMoreAddress2();
//   person.generateAddress().getCustomAddress1();
//   person.generateAddress().getCustomAddress2();


// const promise = Promise.resolve();
// console.log('one'); // 1
// setTimeout(() => console.log('two'), 0); // web Api  6
// promise.then(() => console.log('three')); // 4
// (async () => {
//   console.log('four'); // 2
//   await promise;
//   console.log('five'); // 5
// })();
// console.log('six'); // 3


const promise = Promise.resolve();
promise.then(() => console.log('three')); // micro-task → queued after sync

const num =async () => {
  console.log('four');                  // sync → logs immediately
  await promise;                        // async wait → pause here
  console.log('five');                  // micro-task → scheduled after promise
};

num();