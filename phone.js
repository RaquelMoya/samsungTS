"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(tipe, number) {
        this._tipe = tipe;
        this._number = number;
    }
    Phone.prototype.getTipe = function () {
        return this._tipe;
    };
    Phone.prototype.getNumber = function () {
        return this._number;
    };
    Phone.prototype.setTipe = function (value) {
        this._tipe = value;
    };
    Phone.prototype.setNumber = function (value) {
        this._number = value;
    };
    return Phone;
}());
exports.Phone = Phone;
