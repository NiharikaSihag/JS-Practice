onmessage = (event)=> {
    const numbers = event.data;
    const result = numbers.reduce((total, num) => total+num, 0 );
    
    postMessage(result);
}