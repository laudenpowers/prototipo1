/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogSistemaService } from './log-sistema.service';

describe('LogSistemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogSistemaService]
    });
  });

  it('should ...', inject([LogSistemaService], (service: LogSistemaService) => {
    expect(service).toBeTruthy();
  }));
});
