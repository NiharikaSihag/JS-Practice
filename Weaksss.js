const weakmap = new WeakMap();
let obj1 = {nam: 'Nonu'}
weakmap.set(obj1, 'privateData');
console.log(weakmap.has(obj1))
console.log(weakmap.get(obj1))
obj1 = null;
console.log(weakmap.get(obj1))



const weakset = new WeakSet();
let obj2 = {nam2: 'Nonu'};
weakset.add(obj2);
console.log(weakset.has(obj2))

const myMap = new Map();
console.log(myMap.set(obj2, 'wohoo'))