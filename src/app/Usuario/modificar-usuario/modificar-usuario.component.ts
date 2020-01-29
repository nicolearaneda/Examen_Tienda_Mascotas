import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ServicioUsuariosService } from 'src/app/Servicios/servicio-usuarios.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  usuario:Usuario;
  constructor(private router:Router,private http:ServicioUsuariosService) {   }

  ngOnInit() {
    this.Editar();

  }
  Editar(){
    let id_u=localStorage.getItem("id_u");
 this.http.getUsuarioUnico(+id_u)
    .subscribe(datos=>{this.usuario=datos;})
    }
    Actualizar(usuario:Usuario)
    {
      this.http.updateUsuario(usuario)
      .subscribe(datos=>{
       // this.usuarios=datos;
        this.router.navigate(["listado_usuario"]);
      })
    }

}
