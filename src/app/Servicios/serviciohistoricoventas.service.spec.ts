import { TestBed } from '@angular/core/testing';

import { ServiciohistoricoventasService } from './serviciohistoricoventas.service';

describe('ServiciohistoricoventasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciohistoricoventasService = TestBed.get(ServiciohistoricoventasService);
    expect(service).toBeTruthy();
  });
});
