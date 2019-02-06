import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input('parametros')
  parametros: Array<string>;

  @Output('receptorDeParametro')
  receptorDeParametro: EventEmitter<string>;

  constructor() {
    this.parametros = new Array<string>('Param 1', 'Param 2', 'Param 3');
    this.receptorDeParametro = new EventEmitter();
  }

  ngOnInit() {
  }

  enviarParametro(parametro: string){    
    this.receptorDeParametro.emit(parametro);
  }

}
