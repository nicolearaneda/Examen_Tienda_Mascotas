import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMascotasComponent } from './filtro-mascotas.component';

describe('FiltroMascotasComponent', () => {
  let component: FiltroMascotasComponent;
  let fixture: ComponentFixture<FiltroMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
