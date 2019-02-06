import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato: Contato;

  constructor() { 
    this.contato = new Contato('Laudelino M. C. Neto', 
        '48988195593', 'laudelino_sc@hotmail.com');
  }

  ngOnInit() {
  }

  salvar(){
    console.log(`Nome digitado: ${this.contato.nome}`);
    console.log(`Telefone digitado: ${this.contato.telefone}`);
    console.log(`E-mail digitado: ${this.contato.email}`);
  }

}
