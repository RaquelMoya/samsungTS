export class Mail {
    private _tipe: string;
    private _direction: string;

    constructor(tipe: string, direction: string){
        this._tipe = tipe;
        this._direction = direction;
    }

    public getTipe(): string {
        return this._tipe;
    }
    public getDirection(): string {
        return this._direction;
    }

    public setTipe(value: string) {
        this._tipe = value;
    }
    public setDirection(value: string) {
        this._direction = value;
    }
}