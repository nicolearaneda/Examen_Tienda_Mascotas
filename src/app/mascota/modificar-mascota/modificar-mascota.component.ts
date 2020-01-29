import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { ServicioMascotasService } from 'src/app/Servicios/servicio-mascotas.service';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit {
  mascota:Mascota;
  constructor(private router:Router, private http:ServicioMascotasService) { }

  ngOnInit() 
  {
    this.Editar();
  }

  Editar()
  {
  let id_m=localStorage.getItem("id_m");
  this.http.getMascotaUnica(+id_m)
  .subscribe(datos=>{this.mascota=datos;})
  }
  Actualizar(mascota:Mascota)
  {
    this.http.updateMascota(mascota)
    .subscribe(datos=>{
      this.mascota=datos;
      this.router.navigate(["listado_mascotas"]);
    })
  }

}
