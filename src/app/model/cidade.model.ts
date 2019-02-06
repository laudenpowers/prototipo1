import { Uf } from "./uf.model";

export class Cidade{

    constructor(private _codigo?: number, private _descricao?: string, private _uf?: Uf){

        if (this._codigo == undefined){
            this._codigo = 0;
        }

        if (this._descricao == undefined){
            this._descricao = '';
        }

        if (this._uf == undefined){
            this._uf = new Uf();
        }

    }

    get codigo(): number{
        return this._codigo;
    }

    set codigo(novoValor: number){
        this._codigo = novoValor;
    }

    get descricao(): string{
        return this._descricao;
    }

    set descricao(novoValor: string){
        this._descricao = novoValor;
    }

    get uf(): Uf{
        return this._uf;
    }

    set uf(novoValor: Uf){
        this._uf = novoValor;
    }

}