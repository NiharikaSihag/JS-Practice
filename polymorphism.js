class Account{
    getAccount(){
        return 'Account1'
    }
}

class Account2 extends Account{
    getAccount(){
        return 'Account2'
    }
}
class Account3 extends Account{
    getAccount(){
        return 'Account3'
    }
}
const accounts = [new Account(),new Account2(), new Account3()]
accounts.forEach(account => {
    console.log(account.getAccount())
})