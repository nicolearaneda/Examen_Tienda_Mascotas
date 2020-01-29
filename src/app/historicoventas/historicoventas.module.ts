import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoventasListadoComponent } from './historicoventas-listado/historicoventas-listado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
  HistoricoventasListadoComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HistoricoventasModule { }
