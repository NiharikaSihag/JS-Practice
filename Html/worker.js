onmessage = function (event) {
    console.log('recieved', event.data)
    let result = 'Heyyy ';
    postMessage(result);
}