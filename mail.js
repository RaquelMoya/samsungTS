"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipe, direction) {
        this._tipe = tipe;
        this._direction = direction;
    }
    Mail.prototype.getTipe = function () {
        return this._tipe;
    };
    Mail.prototype.getDirection = function () {
        return this._direction;
    };
    Mail.prototype.setTipe = function (value) {
        this._tipe = value;
    };
    Mail.prototype.setDirection = function (value) {
        this._direction = value;
    };
    return Mail;
}());
exports.Mail = Mail;
