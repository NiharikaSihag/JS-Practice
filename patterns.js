// construcypr

// function Person1(name, age){
//     this.name = name;
//     this.age = age;
// }
// const perosn = new Person1('niha', 21);


// factory

class Dog{
    speak(){
        console.log('bark')
    }
}

class Cat{
    speak(){
        console.log('meow')
    }
}

function AnimalFactory(type){
    if(type === 'dog'){
        return new Dog();
    }
}

const pet = AnimalFactory('dog');
pet.speak();


function myperosn(name2){
    this.name2 = name2;
}
myperosn.prototype.print = function(){
    console.log('hey', this.name2);
}
const p = new myperosn('bob')
p.print();



class Subject{
    constructor(){
        this.observer = [];
    }
    subscriber(fn){
        this.observer.push(fn);
    }
    notify(data){
        this.observer.forEach(fn => fn(data));
    }
}
const subject = new Subject();
subject.subscriber(data => console.log('recieved', data));
subject.notify('hey')



const person = {
    age: 40
}

const proxy = new Proxy(person, {
    get(target, prop){
        if(prop === 'age'){
            return target[prop]
        }
    }
})
console.log(proxy.age);





const myFun = (function(){
    let instance;
    return {
        getInstance: function(){
            if(!instance){
                instance = {value:'i AM the only instance'};
            }
            return instance;
        }
    }
})()

const a = myFun.getInstance();