// Simple map
let arr = [1,2,3];
const doubled = arr.map((num) => num*2);
console.log(doubled);
// Map Pollyfill

Array.prototype.myMap = function(callback){
    let result = [];
    for(let i = 0; i< this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;

}
console.log(arr.myMap((num) => num*3));

// filetr
console.log(arr.filter((num) => num%2 == 0));
Array.prototype.myFilter = function(callback) {
    let result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i , this)){
            result.push(this[i]);
        }
    }
    return result;
}
console.log(arr.myFilter((num) => num%3 == 0));

// reduce
console.log(arr.reduce((acc, curr) => acc+curr, 0 ));
//  pollyfill reduce
Array.prototype.myReduce = function (callback){
    let result = 0;
    for(let i = 0; i < this.length; i++){
        result = callback(result, this[i], i , this)
    }
    return result;
}
console.log(arr.myReduce((acc, curr) => acc+curr, 0 )); 

// flat an array

const arr2 = [1,2, [3,4, [5,[6,7, [8]]]],9];
console.log(arr2.flat())
console.log(arr2.flat(5))

// pollyfill for an array flattening
function myFlat(arr, depth = 1){
    let result = [];
    for(let i = 0; i < arr.length ; i++){
        if(Array.isArray(arr[i]) && depth > 0){
            result = result.concat(myFlat(arr[i], depth-1));
        }else{
            result.push(arr[i])
        }
    }
    return result;
}
console.log(myFlat([1,2,3, [4 ,5, 6, [ 7, 8]]]))



// count the array value

const value = [1,2,3,1,2,1,4];
console.log(value.reduce((counts, element) => {
    // If the element exists in our counts object, increment it, otherwise set it to 1
    counts[element] = (counts[element] || 0) + 1;
    return counts;
  }, {}))












  Array.prototype.myMap = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this))
    }
    return result;
  }
  Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i = 0; i< this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result;
  
}


value.reduce((count, curr) => {
    count[curr] = (count[curr] || 0) +1;
    return count;
}, {})




















  console.log(value.reduce((count, curr) => {
    count[curr] = (count[curr] || 0)+1;
    return count;  
  }, {}))