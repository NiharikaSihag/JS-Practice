class System{
    constructor(){
        this.observers = []
    }
    subscribe(fn){
        this.observers.push(fn);
    }
    notify(data){
        this.observers.forEach(fn => fn(data))
    }
}
const obj = new System;
obj.subscribe(msg => console.log('messgae: ', msg))
obj.subscribe(msg => console.log('messgae 2: ', msg))

obj.notify('notify all')