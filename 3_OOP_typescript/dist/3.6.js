"use strict";
{
    // getter setter
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
        get balance() {
            return this._balance;
        }
    }
    const user = new BankAccount(111, "Ahmad Akil", 1000);
    user.deposit = 123;
    console.log(user.balance);
}
