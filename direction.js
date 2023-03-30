"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
var Direction = /** @class */ (function () {
    function Direction(street, number, floor, letter, postalCode, town, province) {
        this._street = street;
        this._number = number;
        this._floor = floor;
        this._letter = letter;
        this._postalCode = postalCode;
        this._town = town;
        this._province = province;
    }
    Direction.prototype.getStreet = function () {
        return this._street;
    };
    Direction.prototype.getNumber = function () {
        return this._number;
    };
    Direction.prototype.getFloor = function () {
        return this._floor;
    };
    Direction.prototype.getLetter = function () {
        return this._letter;
    };
    Direction.prototype.getPostalCode = function () {
        return this._postalCode;
    };
    Direction.prototype.getTown = function () {
        return this._town;
    };
    Direction.prototype.getProvince = function () {
        return this._province;
    };
    Direction.prototype.setStreet = function (value) {
        this._street = value;
    };
    Direction.prototype.setNumber = function (value) {
        this._number = value;
    };
    Direction.prototype.setFloor = function (value) {
        this._floor = value;
    };
    Direction.prototype.setLetter = function (value) {
        this._letter = value;
    };
    Direction.prototype.setPostalCode = function (value) {
        this._postalCode = value;
    };
    Direction.prototype.setTown = function (value) {
        this._town = value;
    };
    Direction.prototype.setProvince = function (value) {
        this._province = value;
    };
    return Direction;
}());
exports.Direction = Direction;
