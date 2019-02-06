import { Component } from '@angular/core';

import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Livro de Angular 2';

  foto: string = 'favicon.ico';  

  parametrosDoPai: Array<string>;

  itemSelecionado: string;

  constructor(private service: AlertaService){
    this.parametrosDoPai = new Array<string>('Param do Pai 1', 'Param do Pai 2', 'Param do Pai 3');
  }

  receberParametro(parametro: string): void{
    this.itemSelecionado = parametro;
  }

  enviarMsg(): void{
    this.service.msgAlerta();
  }

}
