import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) {}

  obtenerDatos(){
    return this.http.get('https://digimon-api.vercel.app/api/digimon')
  }
}
