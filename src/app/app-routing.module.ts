import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuarioComponent } from './Usuario/listado-usuario/listado-usuario.component';
import { AgregarUsuarioComponent } from './Usuario/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './Usuario/modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from './Usuario/eliminar-usuario/eliminar-usuario.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { AgregarMascotaComponent } from './mascota/agregar-mascota/agregar-mascota.component';
import { ListadoMascotaComponent } from './mascota/listado-mascota/listado-mascota.component';
import { HistoricoventasListadoComponent } from './historicoventas/historicoventas-listado/historicoventas-listado.component';

const routes: Routes = [
  {path: 'listado_usuario',
  component: ListadoUsuarioComponent
  },
  {
    path: 'agregar_usuario',
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
    path: 'agregar_mascota',
    component: AgregarMascotaComponent
  },
  {
    path:'listado_mascota',
    component: ListadoMascotaComponent
  },
  {
    path:'historicoventas_listado',
    component: HistoricoventasListadoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
