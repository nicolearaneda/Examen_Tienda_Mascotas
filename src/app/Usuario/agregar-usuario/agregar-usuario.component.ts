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
  
  usuario:Usuario = {nombre:'', apellidos:'', telefono:null, rol:null , username:'', password:''};
  constructor(private router:Router, private http:ServicioUsuariosService) { 
  }
  
  ngOnInit() {
    return this.agregarUsuario();
  }

  agregarUsuario()
  {
//  this.http.createUsuario(this.usuario).subscribe(usuariito=>{this.usuario=usuariito});

    /*console.log(this.usuario)  
    this.http.createUsuario(this.usuario).subscribe(datos=>{this.usuario});
    this.router.navigate(["listado_usuario"]);*/
    console.log(this.usuario);
    this.http.createUsuario(this.usuario)
    .subscribe(datos=>{
      this.router.navigate(["listado_usuario"]);
    })
  }









  /*  ngOnInit() {
    return this.agregarUsuario();
  }

  agregarUsuario()
  {
    this.http.createUsuario(this.usuario).subscribe
    (usuario=>{this.usuario=usuario});
  }*/



 //Para volver a la pagina principal 
  //this.router.navigateByUrl('/');

}
