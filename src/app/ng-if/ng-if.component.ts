import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  isShowNome: boolean;

  cursos: string[];

  constructor() { 
    this.cursos = [];
  }

  ngOnInit() {
  }

  mostrar(): void{
    this.isShowNome = !this.isShowNome;
  }

  getValor(): boolean{
    return this.isShowNome;
  }

  adicionarCurso(){
    this.cursos.push('Angular 2');
  }

}
