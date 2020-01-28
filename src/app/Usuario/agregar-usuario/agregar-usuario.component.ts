import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ServicioUsuariosService } from 'src/app/Servicios/servicio-usuarios.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  usuario:Usuario;
  constructor(private router:Router, private http:ServicioUsuariosService) { 
  this.usuario;
  }
  ngOnInit() {
  }
  Guardar(){
   
    this.http.createUsuario(this.usuario)
    .subscribe(datos=>{
      this.router.navigate(["listadousuario"]);
    })
  }

 //Para volver a la pagina principal 
  //this.router.navigateByUrl('/');

}
