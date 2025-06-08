class Abract{
    process(){
        console.log('Processed the amt')
        this.#connectToServer();
    }
    #connectToServer(){
        console.log('Connec tp server')
    }
}

const obj = new Abract();
obj.process()