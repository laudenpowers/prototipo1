import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  private nomes: string[];

  constructor() { 
    this.nomes = ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'TEO CU', 'Si fude'];
  }

  adicionar(nome: string): void{
    this.nomes.push(nome);
  }

  getNomes(): string[]{
    return this.nomes;
  }

}
