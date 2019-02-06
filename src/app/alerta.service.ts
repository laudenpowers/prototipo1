import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

  constructor() { }

  msgAlerta(): void{
    alert("Fui clicado CARAIIIII");  
  }

}
