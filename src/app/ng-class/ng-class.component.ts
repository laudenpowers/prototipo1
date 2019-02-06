import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  isAdicionarClasseCss: boolean;

  constructor() { }

  ngOnInit() {
  }

  atualizarElementos(): void{
    this.isAdicionarClasseCss = !this.isAdicionarClasseCss;
  }

  getClassesCss(): any{

    let classes = {
      'cor-fundo': this.isAdicionarClasseCss,
      'cor-letra': this.isAdicionarClasseCss,
      'estilo-letra': this.isAdicionarClasseCss,
      'borda-paragrafo': this.isAdicionarClasseCss
    };

    return classes;

  }

}
