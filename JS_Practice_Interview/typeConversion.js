let a = '123';

// a = undefined(a);
console.log(typeof a);
console.log(a);


let str = 'return x * 2;';
let fn = new Function('x', str);

console.log(typeof fn); // "function"
console.log(fn(5));     // 10


// a = Array(a);
// console.log(typeof a); // string to array will be converted to object 
// console.log(a); // ['123']
// a = Number(a);
// console.log(typeof a); // object to number will be converted to number only
// console.log(a);


// a = BigInt(a);
// console.log(typeof a);
// a = Symbol(a);
// console.log(typeof a); // works correct
// a = Boolean(a);
// console.log(typeof a);
// a = Object(a);
// console.log(typeof a);
// a = Array(a);
// console.log(typeof a);
// a = BigInt(a);
// console.log(typeof a); // cannot convert boolean to bigint 



// string to boolean 

// let a = '123';
// a = Boolean(a);
// console.log(typeof a); //boolean
// console.log(a); //true

// let a = '';
// a = Boolean(a);
// console.log(typeof a); //boolean
// console.log(a); //false
