export class Phone {
    private _tipe: string
    private _number: number

    constructor(tipe: string, number: number) {
        this._tipe = tipe;
        this._number = number;
    }


    public getTipe(): string {
        return this._tipe;
    }
    public getNumber(): number {
        return this._number;
    }


    public setTipe(value: string) {
        this._tipe = value;
    }
    public setNumber(value: number) {
        this._number = value;
    }
}