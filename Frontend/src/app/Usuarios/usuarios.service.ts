import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/Usuario';
import { Observable } from 'rxjs/Observable';
import { Departamento } from '../Models/Departamento';

@Injectable()
export class UsuariosService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private readonly _http: HttpClient) { }

  public getUsuarios() : Observable<Usuario>{
    return this._http.get("https://localhost:5001/api/usuarios");
  }
  public getDepartamento(): Observable<Departamento> {
    return this._http.get("https://localhost:5001/api/usuarios/departamentos");
  }
  public postUsuario(datos: Usuario): Observable<any> {
    return this._http.post("https://localhost:5001/api/usuarios", datos, this.httpOptions);
  }
}
