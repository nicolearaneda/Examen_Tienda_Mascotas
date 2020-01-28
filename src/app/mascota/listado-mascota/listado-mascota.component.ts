import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { ServicioMascotasService } from 'src/app/Servicios/servicio-mascotas.service';


@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {
  mascotas:Mascota[];

  constructor(private http:ServicioMascotasService,private router:Router) { }

  ngOnInit() {
    this.http.getMascotas()
    .subscribe(datos=>{this.mascotas=datos;
    })
  }
Editar(mascota:Mascota):void{
  localStorage.setItem("id_m",mascota.id_m.toString());
  this.router.navigate(["modificarmascota"]);
}
Eliminar(mascota:Mascota)
{
  this.http.deleteMascota(mascota)
  .subscribe(datos=>{
   this.mascotas=this.mascotas.filter(p=>p!=mascota);
    alert("eliminado");
    this.router.navigate(["listadomascota"]);
    })
}