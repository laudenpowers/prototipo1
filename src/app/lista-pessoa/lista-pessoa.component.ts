import { Component, OnInit } from '@angular/core';
import { PessoaServiceService } from './pessoa-service.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaServiceService]
})
export class ListaPessoaComponent implements OnInit {

  private nomes: string[];

  nome: string = "Laudelino";

  constructor(private service: PessoaServiceService) {
    this.nomes = service.getNomes();
  }

  ngOnInit() {
  }

  adicionarNome(){
    this.service.adicionar(this.nome);
  }

}
