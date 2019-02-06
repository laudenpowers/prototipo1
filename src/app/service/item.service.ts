import { LogSistemaService } from './log-sistema.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {

  constructor(private logDeSistema: LogSistemaService) { 

  }
  
  listarTodos(): Array<string>{
    this.logDeSistema.logar('Acesso ao método listarTodos()');
    return ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  }

}
