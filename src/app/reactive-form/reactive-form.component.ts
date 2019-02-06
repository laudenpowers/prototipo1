import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  frmPessoa: FormGroup;

  pessoa: Pessoa;

  constructor(private fb: FormBuilder) { 
    this.pessoa = new Pessoa('Laudelino', '00590028910', '4222822');
    this.criarValidador();
  }

  private criarValidador(): void{
    this.frmPessoa = this.fb.group({
      'nome': ['', [Validators.required, Validators.maxLength(10)]],
      'cpf': ['', [Validators.required]],
      'rg': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'cidade': this.fb.group({
        'codigo': ['', [Validators.required]], 
        'descricao': ['', [Validators.required]], 
        'uf': this.fb.group({
          'codigo': ['', [Validators.required]],
          'descricao': ['', [Validators.required]]
        })
      })
    });
  }

  ngOnInit() {
  }

  isCampoInvalido(caminhoDoCampo: string){
    
    if (caminhoDoCampo != null){

      let caminho: string[] = caminhoDoCampo.split('.');      

      let campo: AbstractControl = null

      caminho.forEach(idDoCampo => {
        
        if (campo == null){
          campo = this.frmPessoa.get(idDoCampo);
        }else{
          campo = campo.get(idDoCampo);
        }

      });

      return campo.invalid && (campo.dirty || campo.touched);

    }
    
    return false;

  }

  salvar(): void{
    this.pessoa = Object.assign({}, this.frmPessoa.value);
    console.log('{ nome: ' + this.pessoa.nome + ', rg: ' + this.pessoa.rg + ', cpf: ' + this.pessoa.cpf + ', email: ' + this.pessoa.email +' }');
    console.log('{ codigo: ' + this.pessoa.cidade.codigo + ', descricao: ' + this.pessoa.cidade.descricao + ' }');
    console.log('{ codigo: ' + this.pessoa.cidade.uf.codigo + ', descricao: ' +  this.pessoa.cidade.uf.descricao + ' }');
  }

}
