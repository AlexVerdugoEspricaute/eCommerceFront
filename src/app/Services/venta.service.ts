import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';
import { Venta } from '../Interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlApi:string = 'http://localhost:5139/api/Venta/';


  constructor(private httpClient: HttpClient) { }

  registrarVenta(request:Venta):Observable<ResponseApi>{
    return this.httpClient.post<ResponseApi>(`${this.urlApi}Registrar`,request)
  }

  historialVenta(buscarPor:string,numeroVenta:string,fechaInicio:string,fechaFin:string):Observable<ResponseApi>{
    return this.httpClient.get<ResponseApi>(`${this.urlApi}Historial?buscarPor=${buscarPor}&numeroVenta=${numeroVenta}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }

  reporteVenta(fechaInicio:string,fechaFin:string):Observable<ResponseApi>{
    return this.httpClient.get<ResponseApi>(`${this.urlApi}Reporte?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }

}
