// Open Closed
class Discount{
    getDiscount(){
        return 0;
    }
}
class ValentineDiscount extends Discount{
    getDiscount(){
        return 30;
    }
}

class RepubliDiscount extends Discount{
    getDiscount(){
        return 50;
    }
}

function applyDiscount(discount){
    console.log(`Discount applied: ${discount.getDiscount()}`);
}

applyDiscount(new ValentineDiscount);
applyDiscount(new RepubliDiscount);