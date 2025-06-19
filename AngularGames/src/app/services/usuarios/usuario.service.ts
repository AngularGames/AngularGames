import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http:HttpClient) {}
  urlVerificar:"http://localhost:3000/usuarios/validar"
  urlRegistro:"http://localhost:3000/usuarios/registro"
  password:string
  usuario:string


   validarUsuario(password:string,usuario:string):Observable<boolean>{
     const respuesta = this.http.get<boolean>(`${this.urlVerificar}`)
     return respuesta
  }

  nuevoUsuario(usuario:Usuario):Observable<Usuario>{
     return this.http.post<Usuario>(`${this.urlRegistro}`,usuario)
}
}
