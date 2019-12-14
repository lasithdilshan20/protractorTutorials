"use strict";
exports.__esModule = true;
var DemoClass_2 = /** @class */ (function () {
    function DemoClass_2(userName, passWord, ssnNo) {
        this.userName = userName;
        this.password = passWord;
        this.ssn = ssnNo;
    }
    DemoClass_2.prototype.getUsername = function () {
        return this.userName;
    };
    DemoClass_2.prototype.getPassword = function () {
        return this.password;
    };
    DemoClass_2.prototype.getSSN = function () {
        return this.ssn;
    };
    DemoClass_2.prototype.setUsername = function (value) {
        this.userName = value;
    };
    return DemoClass_2;
}());
exports.DemoClass_2 = DemoClass_2;
//end of the class
