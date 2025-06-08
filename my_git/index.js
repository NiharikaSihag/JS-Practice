// SRP (SIngle Responsibility Principle)
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}
class userName{
    save(user){
        console.log(`this is ${user.name}`);
    }
}
class sendEmail{
    sendMail(user){
        console.log(`this is ${user.email}`);
    }
}
const User = new user("Niharika", "niharika@gmail.com");
const savingData = new userName();
const mailing = new sendEmail();

savingData.save(User);
mailing.sendMail(User);


// Open Closed Principle 

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
    console.log(`Applied discount: ${discount.getDiscount()}`);
}
applyDiscount(new ValentineDiscount());
applyDiscount(new RepubliDiscount());



// Liskov substitution Principle

class Bird{
    move(){
        console.log('I am moving');
    }
}
class FlyingBird extends Bird{
    fly(){
        console.log('I am flying');
    }
}
class Penguin extends Bird{
    swim(){
        console.log('I am swimming');
    }
}

const sparrow = new FlyingBird();
sparrow.fly();


// Interface Segregation principle

class Printer{
    print(){
        console.log('Printinggg');
    }
}
class Scan {
    scan(){
        console.log('scanning');
    }
}
const printer = new Printer();
const scanner = new Scan();

printer.print();
scanner.scan();


// dependency inversion principle 

class DataBase{
    getData(){
        throw new Error('Method not implemented');
    }
}
class MySQLDB extends DataBase{
     getData(){
        return 'MySQL data';
     }
}
class MongoDB extends DataBase{
    getData(){
        return 'Mongo data';
     }
}

class DataFecther{
    constructor(database){
        this.database = database;
    }
    fetchData(){
        return this.database.getData();
    }
}

const mysqldatabase = new MySQLDB();
const mymongo = new MongoDB();

const fecther1 = new DataFecther(mysqldatabase);
console.log(fecther1.fetchData());

const fecther2 = new DataFecther(mymongo);
console.log(fecther2.fetchData());