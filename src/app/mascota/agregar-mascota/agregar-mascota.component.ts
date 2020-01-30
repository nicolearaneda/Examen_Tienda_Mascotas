import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { ServicioMascotasService } from 'src/app/Servicios/servicio-mascotas.service';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {
  mascota:Mascota={id_m:0,nombre:'',tipo:'',precio:0, vendido:'no'};
  
  constructor(private router:Router, private http:ServicioMascotasService) {  } 
  
  ngOnInit() 
  {
    this.mascota;
  }

  agregarMascota()
  {
    //this.http.createMascota(this.mascota).subscribe(mascotita=>{this.mascota=mascotita});
    this.http.createMascota(this.mascota)
    .subscribe(datos=>{
      this.router.navigate(["listado_mascota"]);
    })
  }
}

