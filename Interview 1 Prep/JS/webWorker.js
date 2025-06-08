onmessage = function(event) {
    const {a,b} = event.data;
    const result = a+b;
    postMessage(result);
}