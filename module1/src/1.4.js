"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Different Types of variables
var nam = "Ahmad Akil";
var roll = 123;
var isStd = true;
var x = undefined;
var salary = null;
//Array
var friends = ["Korim", "Rohim", "Mukles"];
var allPeople = __spreadArray(__spreadArray([], friends, true), [nam], false);
// console.log(allPeople);
//Tuple
var nameAge = ["Solim Ullah", 60];
// console.log(nameAge);
allPeople.push(nameAge[0]);
console.log(allPeople);
