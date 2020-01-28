import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoventasListadoComponent } from './historicoventas-listado.component';

describe('HistoricoventasListadoComponent', () => {
  let component: HistoricoventasListadoComponent;
  let fixture: ComponentFixture<HistoricoventasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoventasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoventasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
