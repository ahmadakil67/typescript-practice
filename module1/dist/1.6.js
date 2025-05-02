"use strict";
//Normal Function
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add(2));
//Arrow Function
var addArrow = function (num1, num2) { return num1 + num2; };
//Function into Object == Method 
var MyBalance = {
    name: "Ahmad Akil",
    balance: 1000,
    totalBalance: function (balance) {
        return "Total Balance: ".concat(this.balance + balance);
    },
};
console.log(MyBalance.totalBalance(1234));
// Map over the array
var arr = [1, 2, 3, 4, 5];
var newArray = arr.map(function (elem) { return Math.pow(elem, 2); });
console.log(newArray);
