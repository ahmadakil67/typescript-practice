{
    // Access Modifier 
    class BankAccount {
       public readonly id: number;
       public name: string;
       private _balance: number;

        constructor(id: number, name: string, _balance: number){
            this.id = id
            this.name = name
            this._balance = _balance
        }
        public addDeposit(amount: number){
            this._balance = this._balance + amount;
        }
        public getAmount(){
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