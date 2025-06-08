// type score = Record<string, number>
// const score = {
//     Naman:2,
//     Niha: 4
// }
// console.log(score);

interface User {
    name: string,
    age: number,
    isStudent: boolean
}


// enum Direction{
//     up,
//     down, 
//     right,
//     left
// }

// console.log(Direction)
type BasicUser = Pick<User, 'name'|'age'> //union
type BasicUser2 = Pick<User, 'name' & 'age'> //Intersection
const MYUSER1 : BasicUser= {
    name: 'Niha',
    age: 345
}
const MyUser : BasicUser2 = {
    name: 'Niha'
}
// console.log(BasicUser);


class Person5 {
    private name: string;
    public age: number;
    protected id: number;
    constructor(name:string, age: number, id: number){
        this.name = name;
        this.age = age;
        this.id = id;
    }
    getName():string{
        return this.name;
    }
    getId():number{
        return this.id;
    }
}
class Student extends Person5{
    constructor(name:string, id: number, age:number){
        super(name, age, id);
    }
    
    getStudentId():number{
        return this.id;
    }
    // getStudentName():string{
    //     return this.name;
    // }
}
const p = new Person5('Niharika', 21, 40);
const s = new Student('Nonu', 22, 41)
console.log(p.getName());
console.log(p.age);
console.log(p.getId())
// console.log(s.getStudentName());
console.log(s.age);
console.log(s.getStudentId())

function print<T>(args:T):T{
    return args;
}
console.log(print<string>('Niharika'))

// class Pwerson2{
//     constructor(private name: string){

//     }
//     public getName():string{
//         return this.name;
//     }
// }

// const obj = new Pwerson2('Name');
// console.log(obj.getName())


type t1 = string;
type t2 = [number];

type t3 = t1 & t2;
type t4 = t1 | t2;

// const a1:t3 = 5;
