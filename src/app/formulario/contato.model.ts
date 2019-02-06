export class Contato{

    constructor(private _nome: string, private _telefone: string, 
            private _email: string){

    }

    get nome(): string{
        return this._nome;
    }

    set nome(nome: string){
        this._nome = nome;
    }

    get telefone(): string{
        return this._telefone;
    }

    set telefone(telefone: string){
        this._telefone = telefone;
    }

    get email(): string{
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

}