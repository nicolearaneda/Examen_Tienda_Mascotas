import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historicoventas } from '../interfaces/historicoventas';

@Injectable({
  providedIn: 'root'
})
export class ServiciohistoricoventasService {
  path_ventas:string;
  
  constructor(private http:HttpClient) 
  { 
    this.path_ventas='http://localhost:8080/historicoventas'

  }

  getVentas()
  {
    return this.http.get<Historicoventas[]>(this.path_ventas);
  }

  createVentas(venta:Historicoventas)
  {
    return this.http.post<Historicoventas>(this.path_ventas,venta);
  }
  
  updateVentas(venta:Historicoventas)
  {
    return this.http.put<Historicoventas>(this.path_ventas+"/"+venta.id_v,venta);
  }

  deleteVentas(venta:Historicoventas)
  {
  return this.http.delete<Historicoventas>(this.path_ventas+"/"+venta.id_v);
  }

  getVentaUnica(id_v:Number)
  {
    return this.http.get<Historicoventas>(this.path_ventas+"/"+id_v);
  }

}
