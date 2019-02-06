export class Uf{
    
    constructor(private _codigo?: string, private _descricao?: string){

        if (this._codigo == undefined){
            this._codigo = '';
        }

        if (this._descricao = undefined){
            this._descricao = '';
        }

    }

    get codigo(): string{
        return this._codigo;
    }

    set codigo(novoValor: string){
        this._codigo = novoValor;
    }

    get descricao(): string{
        return this._descricao;
    }

    set descricao(novoValor: string){
        this._descricao = novoValor;
    }

}