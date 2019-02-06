import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  isHabilitarBotao: boolean;

  nomes: Array<string>;

  idade: number;

  constructor() { 
    this.isHabilitarBotao = false;
    this.nomes = new Array<string>();
    this.idade = 0;
  }

  ngOnInit() {
  }

  processarClique(): void{
    console.log('Clique realizado no botão');
  }

  processarTeclaDigitada($event): void{
    console.log($event);
  }

  processarTeclaPressionada(valor: string): void{
    console.log('===> ' + valor);
  }

  validarSenhaPor(conteudoDoInput: string): void{

    if (conteudoDoInput.length >= 5){
      this.isHabilitarBotao = true;
    }else{
      this.isHabilitarBotao = false;
    }
    
  }

  gravarSenha(senhaDigitada: string): void{
    alert('A senha digitada foi: ' + senhaDigitada);
  }

  adicionar(nome: string): void{
    this.nomes.push(nome);
  }

  verIdade(idadeDigitada: number): void{
    let ano: Date = new Date();
    this.idade = ano.getFullYear() - idadeDigitada;
  }

}
