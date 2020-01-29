import { Injectable } from '@angular/core';
import { Mascota } from '../interfaces/mascota';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioMascotasService {
  path_mascota:string;

  constructor(private http:HttpClient) 
  { 
    this.path_mascota='http://localhost:8080/mascotas'

  }

  getMascotas()
  {
    
    return this.http.get<Mascota[]>(this.path_mascota);
  }
  
  createMascota(mascota:Mascota)
  {
    return this.http.post<Mascota>(this.path_mascota,mascota);
  }
  
  updateMascota(mascota:Mascota)
  {
    return this.http.put<Mascota>(this.path_mascota+"/"+mascota.id_m,mascota);
  }

  deleteMascota(mascota:Mascota)
  {
  return this.http.delete<Mascota>(this.path_mascota+"/"+mascota.id_m);
  }

  getMascotaUnica(id_m:number)
  {
    return this.http.get<Mascota>(this.path_mascota+"/"+id_m);
  }


}

