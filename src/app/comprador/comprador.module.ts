import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaMascotaComponent } from './venta-mascota/venta-mascota.component';
import { AltaCompradorComponent } from './alta-comprador/alta-comprador.component';
import { FiltroMascotasComponent } from './filtro-mascotas/filtro-mascotas.component';
import { HistoricoVentasComponent } from './historico-ventas/historico-ventas.component';



@NgModule({
  declarations: [VentaMascotaComponent, AltaCompradorComponent, FiltroMascotasComponent, HistoricoVentasComponent],
  imports: [
    CommonModule
  ]
})
export class CompradorModule { }
