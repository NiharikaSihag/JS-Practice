
fn();
const promise = new Promise((resolve, reject) =>{
    const success = true;
    if(success){
        console.log("here")
        resolve('sucess');
    }
    else{
        reject('fail');
    }
});
promise.then(result => console.log('resolved'))
.catch(error => console.error('error'));


 async function  fn(){
    console.log('1')
    await promise;
    console.log("ïnside promise");
}


console.log("end");