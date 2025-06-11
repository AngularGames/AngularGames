import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http:HttpClient) {}
  url:"http//localhost:3000"
  password:string
  usuario:string
  respuesta

  validarUsuario(password:string,usuario:string):Observable<boolean>{
      this.http.get<boolean>(`${this.url}/usuario/validar?usuario=${usuario},?password=${password}`)
       .subscribe(data=>this.respuesta=data)
       console.log(this.respuesta)
       return this.respuesta
       
  }

  nuevoUsuario(){

  }

}
