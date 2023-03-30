export class Direction{
    private _street: string;
    private _number: number;
    private _floor: number;
    private _letter: string;
    private _postalCode: number;
    private _town: string;
    private _province: string;

    constructor(street: string, number: number, floor: number, letter: string, postalCode: number, town: string, province: string) {
        this._street = street;
        this._number = number;
        this._floor = floor;
        this._letter = letter;
        this._postalCode = postalCode;
        this._town = town;
        this._province = province;
    }

    public getStreet(): string {
        return this._street;
    }
    public getNumber(): number {
        return this._number;
    }
    public getFloor(): number {
        return this._floor;
    }
    public getLetter(): string {
        return this._letter;
    }
    public getPostalCode(): number {
        return this._postalCode;
    }
    public getTown(): string {
        return this._town;
    }
    public getProvince(): string {
        return this._province;
    }
    

    public setStreet(value: string) {
        this._street = value;
    }
    public setNumber(value: number) {
        this._number= value;
    }
    public setFloor(value: number) {
        this._floor = value;
    }
    public setLetter(value: string) {
        this._letter = value;
    }
    public setPostalCode(value: number) {
        this._postalCode = value;
    }
    public setTown(value: string) {
        this._town = value;
    }   
    public setProvince(value: string) {
        this._province = value;
    }
}