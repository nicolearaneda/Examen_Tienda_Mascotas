import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaMascotas';

  constructor(private router:Router) {  }
 
  listado_mascotas()
  {
    this.router.navigate(['listado_mascota']);
  }

  alta_mascotas()
  {
    this.router.navigate(['agregar_mascota']);
  }
  
  modificar_mascotas()
  {
    this.router.navigate(['modificar_mascota']);
  }

  listado_usuarios()
  {
    this.router.navigate(['listado_ usuario']);
  }

  alta_usuarios()
  {
    this.router.navigate(['agregar_usuario']);
  }
  
  modificar_usuarios()
  {
    this.router.navigate(['modificar_usuario']);
  }

}

/*
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tendaMascota';

  constructor(private router:Router)
  {}


  verListado()
  {
    this.router.navigate(['listado-mascotas']);
  }

  verAlta()
  {
    this.router.navigate(['alta-mascota']);
  }

  comprarMascota()
  {
    this.router.navigate(['comprar-mascota']);
  }



}
*/