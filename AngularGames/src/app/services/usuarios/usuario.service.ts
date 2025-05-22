import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  bdUsuarios:Usuario[]=[
    {
      "idUsuario":"1",
      "nombre":"nombre1",
      "apellido":"apellido1",
      "nombreUsuario":"usuario1",
      "password":"password1",
      "correo":"correo1",
      "direccion":"calle1",
      "telefono":1111111
    },
    {
      "idUsuario":"2",
      "nombre":"nombre2",
      "apellido":"apellido2",
      "nombreUsuario":"usuario2",
      "password":"password2",
      "correo":"correo2",
      "direccion":"calle2",
      "telefono":222222
    },
    {
      "idUsuario":"3",
      "nombre":"nombre3",
      "apellido":"apellido3",
      "nombreUsuario":"usuario3",
      "password":"password3",
      "correo":"correo3",
      "direccion":"calle3",
      "telefono":3333333
    }

  ]

  validarUsuario(nombreUsuario:string,password:string):boolean{
    if (this.bdUsuarios.find(usuario=>usuario.nombreUsuario==nombreUsuario&&usuario.password==password)){
      return true
    } else return false
  }

  crearUsuario(usuario:Usuario):void{
    this.bdUsuarios.push(usuario);
  }

  eliminarUsuario(usuario:string):void{
    this.bdUsuarios.map(usuarios=>usuarios.nombreUsuario!=usuario);
  }



}
