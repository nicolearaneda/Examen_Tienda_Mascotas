import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuarioComponent } from './Usuario/listado-usuario/listado-usuario.component';
import { AgregarUsuarioComponent } from './Usuario/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './Usuario/modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from './Usuario/eliminar-usuario/eliminar-usuario.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { AgregarMascotaComponent } from './mascota/agregar-mascota/agregar-mascota.component';
import { ListadoMascotaComponent } from './mascota/listado-mascota/listado-mascota.component';


const routes: Routes = [
  {path: 'listado_usuario',
  component: ListadoUsuarioComponent
  },
  {
    path: 'alta_usuario',
    component: AgregarUsuarioComponent
  },
  {
    path: 'modificar_usuario',
    component: ModificarUsuarioComponent
  },
  {
    path: 'eliminar_usuario',
    component: EliminarUsuarioComponent
  },
  {
    path: 'modificar_mascota',
    component: ModificarMascotaComponent 
  },
  {
    path: 'alta_mascota',
    component: AgregarMascotaComponent
  },
  {
    path:'listado_mascota',
    component: ListadoMascotaComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
