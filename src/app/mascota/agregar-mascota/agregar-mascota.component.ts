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
  mascota:Mascota;
  constructor(private router:Router, private http:ServicioMascotasService) { 
  this.mascota;
  }
  
  ngOnInit() {
    return this.agregarMascota();
  }

  agregarMascota()
  {
    this.http.createMascota(this.mascota).subscribe(mascotita=>{this.mascota=mascotita});
  }

}

