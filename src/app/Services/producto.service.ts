import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import { Producto } from '../Interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlApi:string = 'http://localhost:5139/api/Producto/';


  constructor(private httpClient: HttpClient) { }

  listaProducto(): Observable<ResponseApi>{
    return this.httpClient.get<ResponseApi>(`${this.urlApi}Lista`)
  }
  
  guardarProducto(request:Producto):Observable<ResponseApi>{
    return this.httpClient.post<ResponseApi>(`${this.urlApi}Guardar`,request)
  }

  editarProducto(request:Producto):Observable<ResponseApi>{
    return this.httpClient.put<ResponseApi>(`${this.urlApi}Editar`,request)
  }
  
  eliminarProducto(id:number):Observable<ResponseApi>{
    return this.httpClient.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)
  }
}
