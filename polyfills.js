function customLength(arr){
    let len = 0;
    for(len in arr){
        len++;
    }
    return len;
}
console.log(customLength([1,2,4]))

if(!Array.prototype.getSize){
    Array.prototype.getSize = function(){
        let count = 0;
        while(count in this){
            count++;
        }
        return count;
    }
}
Object.defineProperty(Array.prototype, 'size', {
    get: function(){
        let count = 0;
        while(count in this){
            count++;
        }
        return count;
    }
})
let arr2 = [1,2,3,4,5];
console.log(arr2.getSize())
console.log(arr2.length)

