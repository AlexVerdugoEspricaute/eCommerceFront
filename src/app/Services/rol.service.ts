import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';



@Injectable({
  providedIn: 'root'
})
export class RolService {
  private urlApi:string = 'http://localhost:5139/api/Rol/';

  constructor(private httpClient: HttpClient) {  }
  listaRol(): Observable<ResponseApi>{
    return this.httpClient.get<ResponseApi>(`${this.urlApi}Lista`)
  }
}
