"use strict";
{
    // Access Modifier 
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getAmount() {
            return this._balance;
        }
    }
    // class Student extends BankAccount{
    //     test(){
    //         this.
    //     }
    // }
    const user = new BankAccount(111, "Ahmad Akil", 1000);
    user.addDeposit(100);
    console.log(user.getAmount());
}
