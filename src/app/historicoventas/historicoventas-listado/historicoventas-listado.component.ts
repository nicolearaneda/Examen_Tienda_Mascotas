import { Component, OnInit } from '@angular/core';
import { Historicoventas } from 'src/app/interfaces/historicoventas';
import { ServiciohistoricoventasService } from 'src/app/Servicios/serviciohistoricoventas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historicoventas-listado',
  templateUrl: './historicoventas-listado.component.html',
  styleUrls: ['./historicoventas-listado.component.css']
})
export class HistoricoventasListadoComponent implements OnInit {
  ventas:Historicoventas[];

  constructor(private http:ServiciohistoricoventasService,private router:Router) { }

  ngOnInit() {
    return this.verListadoVentas();
  }  

  verListadoVentas()
  {
    this.http.getVentas()
    .subscribe(ventass=>{this.ventas=ventass}); //acá mostrará todo el array de JSON
  }


/*Editar(venta:Historicoventas):void{
  localStorage.setItem("id_v",venta.id_v.toString());
  this.router.navigate(["modificar_venta"]);
}
Eliminar(venta:Historicoventas)
{
  this.http.deleteVentas(venta)
  .subscribe(datos=>{
   this.ventas=this.ventas.filter(p=>p!=venta);
    alert("eliminado");
    this.router.navigate(["listado_ventas"]);
    })
}*/
}