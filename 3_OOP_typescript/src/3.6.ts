{
  // getter setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    set deposit(amount: number) {
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
