import { Injectable } from "@angular/core";

@Injectable()
export class LogSistemaService {

  constructor() { 

  }

  logar(mensagem: string): void{
    console.log('INFO - ' + new Date() + ' - ' + mensagem);
  }

}
