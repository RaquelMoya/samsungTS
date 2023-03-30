"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, surname, age, dni, birthdate, favouriteColor, sex, directions, mails, phones, notes) {
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._dni = dni;
        this._birthdate = birthdate;
        this._favouriteColor = favouriteColor;
        this._sex = sex;
        this._directions = directions;
        this._mails = mails;
        this._phones = phones;
        this._notes = notes;
    }
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.getSurname = function () {
        return this._surname;
    };
    Person.prototype.getAge = function () {
        return this._age;
    };
    Person.prototype.getDni = function () {
        return this._dni;
    };
    Person.prototype.getBirthdate = function () {
        return this._birthdate;
    };
    Person.prototype.getFavouriteColor = function () {
        return this._favouriteColor;
    };
    Person.prototype.getSex = function () {
        return this._sex;
    };
    Person.prototype.getDirections = function () {
        return this._directions;
    };
    Person.prototype.getMails = function () {
        return this._mails;
    };
    Person.prototype.getPhones = function () {
        return this._phones;
    };
    Person.prototype.getNotes = function () {
        return this._notes;
    };
    Person.prototype.setName = function (value) {
        this._name = value;
    };
    Person.prototype.setSurname = function (value) {
        this._surname = value;
    };
    Person.prototype.setAge = function (value) {
        this._age = value;
    };
    Person.prototype.setDni = function (value) {
        this._dni = value;
    };
    Person.prototype.setBirthdate = function (value) {
        this._birthdate = value;
    };
    Person.prototype.setFavouriteColor = function (value) {
        this._favouriteColor = value;
    };
    Person.prototype.setSex = function (value) {
        this._sex = value;
    };
    Person.prototype.setDirections = function (value) {
        this._directions = value;
    };
    Person.prototype.setMails = function (value) {
        this._mails = value;
    };
    Person.prototype.setPhones = function (value) {
        this._phones = value;
    };
    Person.prototype.setNotes = function (value) {
        this._notes = value;
    };
    return Person;
}());
exports.Person = Person;
