import { Direction } from "./direction";
import { Mail } from "./mail";
import { Phone } from "./phone";

export class Person {
    private _name: string;
    private _surname: string;
    private _age: number;
    private _dni: string;
    private _birthdate: string;
    private _favouriteColor: string;
    private _sex: string;
    private _directions: Direction[];
    private _mails: Mail[];
    private _phones: Phone[];
    private _notes: string;
    
    constructor(name: string, surname: string, age: number, dni: string, birthdate: string, favouriteColor: string, sex: string, directions: Direction[], mails: Mail[], phones: Phone[], notes: string) {
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
    

    public getName(): string {
        return this._name;
    }
    public getSurname(): string {
        return this._surname;
    }
    public getAge(): number {
        return this._age;
    }
    public getDni(): string {
        return this._dni;
    } 
    public getBirthdate(): string {
        return this._birthdate;
    } 
    public getFavouriteColor(): string {
        return this._favouriteColor;
    } 
    public getSex(): string {
        return this._sex;
    } 
    public getDirections(): Direction[] {
        return this._directions;
    } 
    public getMails(): Mail[] {
        return this._mails;
    }
    public getPhones(): Phone[] {
        return this._phones;
    }  
    public getNotes(): string {
        return this._notes;
    } 


    public setName(value: string) {
        this._name = value;
    }
    public setSurname(value: string) {
        this._surname = value;
    }
    public setAge(value: number){
        this._age = value;
    }
    public setDni(value: string) {
        this._dni = value;
    }
    public setBirthdate(value: string) {
        this._birthdate = value;
    }
    public setFavouriteColor(value: string) {
        this._favouriteColor= value;
    }
    public setSex(value: string) {
        this._sex = value;
    }
    public setDirections(value: Direction[]) {
        this._directions = value;
    }
    public setMails(value: Mail[]) {
        this._mails = value;
      }
    public setPhones(value: Phone[]) {
        this._phones = value;
    }
    public setNotes(value: string) {
        this._notes = value;
    }
}