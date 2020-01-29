import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { ListadoMascotaComponent } from './listado-mascota/listado-mascota.component';
import { ModificarMascotaComponent } from './modificar-mascota/modificar-mascota.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ 
    AgregarMascotaComponent,
    ListadoMascotaComponent,
    ModificarMascotaComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MascotaModule { }
