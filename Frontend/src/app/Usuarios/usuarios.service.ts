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
     return this._http.get("");
  }
  public getDepartamento(): Observable<Departamento> {
    return this._http.get("");
  }
  public postUsuario(datos: Usuario): Observable<any> {
    return this._http.post("", datos, this.httpOptions);
  }
}
