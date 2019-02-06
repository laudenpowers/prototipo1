import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamanhoFonte: string;

  tamanhoDaFonteIncrementado: number;

  isAumentarFonte: boolean;

  isAlterarCor: boolean;

  constructor() { 
    this.tamanhoFonte = 20 + 'px';
    this.tamanhoDaFonteIncrementado = 20;
  }

  ngOnInit() {
  }

  aumentarFonte(): void{
    this.tamanhoDaFonteIncrementado++;
    this.tamanhoFonte = this.tamanhoDaFonteIncrementado + 'px';
  }

  atualizarFonte(): void{
    this.isAumentarFonte = !this.isAumentarFonte;
  }

  atualizarCor(): void{
    this.isAlterarCor = !this.isAlterarCor;
  }

}
