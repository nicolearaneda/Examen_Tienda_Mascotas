import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuariosService } from 'src/app/Servicios/servicio-usuarios.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {
  usuarios:Usuario[];

  constructor(private http:ServicioUsuariosService,private router:Router) { }

  ngOnInit() {
    this.http.getUsuarios()
    .subscribe(datos=>{this.usuarios=datos;
    })
  }
Editar(usuario:Usuario):void{
  localStorage.setItem("id",usuario.id.toString());
  this.router.navigate(["modificarusuario"]);
}
Eliminar(usuario:Usuario)
{
  this.http.deleteUsuario(usuario)
  .subscribe(datos=>{
   this.usuarios=this.usuarios.filter(p=>p!=usuario);
    alert("eliminado");
    this.router.navigate(["listadousuarios"]);
    })
}

}
