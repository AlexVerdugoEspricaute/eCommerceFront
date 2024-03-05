import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private urlApi:string = 'http://localhost:5139/api/Menu/';

  constructor(private httpClient: HttpClient) { }

  listaMenu(idUsuario:number): Observable<ResponseApi>{
    return this.httpClient.get<ResponseApi>(`${this.urlApi}Lista?idUsuario=${idUsuario}`)
  }

}
