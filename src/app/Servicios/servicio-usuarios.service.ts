import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {
  path_usuario:string;
  
  constructor(private http:HttpClient) 
  { 
    this.path_usuario='http://localhost:8080/usuarios'
  }

  getUsuarios()
  {
    return this.http.get<Usuario[]>(this.path_usuario);
  }
  
  createUsuario(usuario:Usuario)
  {
    return this.http.post<Usuario>(this.path_usuario,usuario);
  }
  
  updateUsuario(usuario:Usuario)
  {
    return this.http.put<Usuario>(this.path_usuario+"/"+usuario.id_u,usuario);
  }

  deleteUsuario(usuario:Usuario)
  {
  return this.http.delete<Usuario>(this.path_usuario+"/"+usuario.id_u);
  }

  getUsuarioUnico(id_u:Number)
  {
    return this.http.get<Usuario>(this.path_usuario+"/"+id_u);
  }

}