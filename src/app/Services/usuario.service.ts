import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import {Login} from  '../Interfaces/login';
import {Usuario} from  '../Interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi:string = 'http://localhost:5139/api/Usuario/';


  constructor(private httpClient: HttpClient) { }

  listaUsuario(): Observable<ResponseApi>{
    return this.httpClient.get<ResponseApi>(`${this.urlApi}Lista`)
  }

  iniciarSesion(request:Login):Observable<ResponseApi>{
    return this.httpClient.post<ResponseApi>(`${this.urlApi}IniciarSesion`,request)
  }

  guardarUsuario(request:Usuario):Observable<ResponseApi>{
    return this.httpClient.post<ResponseApi>(`${this.urlApi}Guardar`,request)
  }

  editarUsuario(request:Usuario):Observable<ResponseApi>{
    return this.httpClient.put<ResponseApi>(`${this.urlApi}Editar`,request)
  }
  
  eliminarUsuario(id:number):Observable<ResponseApi>{
    return this.httpClient.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)
  }
}
