import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'injecao-dependencia',
  templateUrl: './injecao-dependencia.component.html',
  styleUrls: ['./injecao-dependencia.component.css']
})
export class InjecaoDependenciaComponent implements OnInit {

  itens: Array<string>

  constructor(private itemService: ItemService) {
    this.itens = this.itemService.listarTodos();
  }

  ngOnInit() {
  }

}
