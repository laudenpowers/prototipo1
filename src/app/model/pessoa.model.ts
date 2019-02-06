import { Cidade } from "./cidade.model";

export class Pessoa{

    constructor(private _nome?: string, private _cpf?: string, 
            private _rg?: string, private _cidade?: Cidade,
            private _email?: string){
        
        if (this._nome == undefined || this._nome == null){
            this._nome = '';
        }

        if (this._cpf == undefined || this._cpf == null){
            this._cpf = '';
        }

        if (this._rg == undefined || this._rg == null){
            this._rg = '';
        }

        if (this._cidade == undefined || this._cidade == null){
            this._cidade = new Cidade();
        }

        if (this._email == undefined || this._email == null){
            this._email = '';
        }

    }

    get nome(): string{
        return this._nome;
    }

    set nome(novoValor: string){
        this._nome = novoValor;
    }

    get cpf(): string{
        return this._cpf;
    }

    set cpf(novoValor: string){
        this._cpf = novoValor;
    }

    get rg(): string{
        return this._rg;
    }

    set rg(novoValor: string){
        this._cpf = novoValor;
    }

    get cidade(): Cidade{
        return this._cidade;
    }

    set cidade(novoValor: Cidade){
        this._cidade = novoValor;
    }

    get email(): string{
        return this._email;
    }

    set email(novoValor: string){
        this._email = novoValor;
    }

}