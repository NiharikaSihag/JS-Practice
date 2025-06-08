abstract class Niharika{
    abstract money:number;
    abstract makeMoney():number;
    noMoney: boolean;
    calCulatedMoney:number;
    calculateMoney(){
        console.log(5000);
    }
}

class N extends Niharika{
    money:number = 5000;
    makeMoney(){
        return 10000;
    }
}

const n = new N();
console.log(n.money);
console.log(n.makeMoney())
n.calculateMoney()