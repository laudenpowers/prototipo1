import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgConteudoComponent } from './ng-conteudo/ng-conteudo.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InjecaoDependenciaComponent } from './injecao-dependencia/injecao-dependencia.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertaService } from './alerta.service';
import { ItemService } from './service/item.service';
import { LogSistemaService } from './service/log-sistema.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgConteudoComponent,
    EventBindingComponent,
    InputOutputComponent,
    FormularioComponent,
    InjecaoDependenciaComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [
    AlertaService,
    ItemService, 
    LogSistemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
