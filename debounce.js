function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() =>{
            func.apply({},args);
        }, delay)
    }
}

debounce(function(){
    console.log('hey')
}, 5000)();




// function debounce(func, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             console.log('Hey');
//             func.apply(_, args);
//         }, delay);
//     }
// }
