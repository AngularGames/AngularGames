import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { map, Observable } from 'rxjs';
import { Login } from '../../models/Login';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http:HttpClient) {}
   urlVerificar="http://localhost:3000/usuarios/validar"
   urlRegistro="http://localhost:3000/usuarios/registro"
  password:string
  usuario:string


    validarUsuario(login:Login):Observable<string>{
    console.log("entra ",login," en usuariosService front")
     let respuesta = this.http.post<Login>(`${this.urlVerificar}`,login,{withCredentials:true});
     console.log(respuesta)
     let rol = respuesta.pipe(map(m=>m.roles));
     console.log("este es el rol ",rol)
     return rol


  }

  nuevoUsuario(usuario:Usuario):Observable<Usuario>{
     return this.http.post<Usuario>(`${this.urlRegistro}`,usuario)
}
}
