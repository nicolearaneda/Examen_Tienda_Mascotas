import { TestBed } from '@angular/core/testing';

import { ServicioMascotasService } from './servicio-mascotas.service';

describe('ServicioMascotasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioMascotasService = TestBed.get(ServicioMascotasService);
    expect(service).toBeTruthy();
  });
});
