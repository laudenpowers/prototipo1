import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes: string[];

  pessoas: any[];

  identificador: number;

  constructor() { 
    this.identificador = 5;
    this.nomes = ['João', 'Maria', 'Thiago', 'José', 'MEO PAO'];
    this.pessoas = [];
    this.pessoas.push({id: 1, nome: 'João'});
    this.pessoas.push({id: 2, nome: 'Maria'});
    this.pessoas.push({id: 3, nome: 'Thiago'});
    this.pessoas.push({id: 4, nome: 'José'});
  }

  ngOnInit() {
  }

  meuSave(index: number, pessoas: any): number{
    return pessoas.id;
  }

  atualizar(): void{
    this.pessoas.push({id: this.identificador, nome: 'Nome ' + this.identificador});
    this.identificador++;
  }

}
