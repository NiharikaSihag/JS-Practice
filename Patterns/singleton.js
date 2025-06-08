class SIngleton{
    constructor(name){
        if(SIngleton.instance){
            return SIngleton.instance;
        }
        this.name = name;
        SIngleton.instance = this;
        return this;
    }
    setName(name){
        this.name = name;
        return this;
    }
}
const obj = new SIngleton('Niha');
console.log(obj)
const obj2 = new SIngleton('Nonu')
console.log(obj)
obj2.setName('whooo')
console.log(obj2)
console.log(obj)