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
  usuario:Usuario={id_u:0,nombre:'',apellidos:'',telefono:'',username:'',password:'',rol:0};

  constructor(private router:Router, private http:ServicioUsuariosService) {   }
  
  ngOnInit() 
  {
  this.usuario;  
  }

  agregarUsuario()
  {
//  this.http.createUsuario(this.usuario).subscribe(usuariito=>{this.usuario=usuariito});
    //this.http.createUsuario(this.usuario).subscribe(crear=>{console.log(crear)});

    /*console.log(this.usuario)  
    this.http.createUsuario(this.usuario).subscribe(datos=>{this.usuario});
    this.router.navigate(["listado_usuario"]);*/
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
