import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [    
    ModificarUsuarioComponent,
    AgregarUsuarioComponent,
    EliminarUsuarioComponent,
    ListadoUsuarioComponent,
],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UsuarioModule { }
