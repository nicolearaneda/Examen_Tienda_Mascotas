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

    Editar(usuario:Usuario):void
  {
  if(usuario.rol==1)
  {
    alert("No se puede modificar")
  }else
  {  
  localStorage.setItem("id_u",usuario.id_u.toString());
  this.router.navigate(["modificar_usuario"]);
  }
  }

    Eliminar(usuario:Usuario)
    {
    if(usuario.rol==1)
    {
      alert("No se puede eliminar")
    }else  
    {this.http.deleteUsuario(usuario)
    .subscribe(datos=>{
    this.usuarios=this.usuarios.filter(p=>p!=usuario);
    alert("Eliminado");
    this.router.navigate(["listado_usuario"]); })
    }
    }

}
