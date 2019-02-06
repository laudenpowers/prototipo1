/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgConteudoComponent } from './ng-conteudo.component';

describe('NgConteudoComponent', () => {
  let component: NgConteudoComponent;
  let fixture: ComponentFixture<NgConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgConteudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
