import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarMascotaComponent } from './mascota/agregar-mascota/agregar-mascota.component';
import { ListadoMascotaComponent } from './mascota/listado-mascota/listado-mascota.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { ModificarUsuarioComponent } from './Usuario/modificar-usuario/modificar-usuario.component';
import { AgregarUsuarioComponent } from './Usuario/agregar-usuario/agregar-usuario.component';
import { EliminarUsuarioComponent } from './Usuario/eliminar-usuario/eliminar-usuario.component';
import { ListadoUsuarioComponent } from './Usuario/listado-usuario/listado-usuario.component';
import { ValidaContraDirective } from './Validador/valida-contra.directive';

@NgModule({
  declarations: [
    AppComponent,
    AgregarMascotaComponent,
    ListadoMascotaComponent,
    ModificarMascotaComponent,
    ModificarUsuarioComponent,
    AgregarUsuarioComponent,
    EliminarUsuarioComponent,
    ListadoUsuarioComponent,
    ValidaContraDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
