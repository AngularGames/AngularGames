
import { UsuarioService } from './../../services/usuarios/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: "./pagina-usuario.component.html",
  styleUrl: './pagina-usuario.component.css',

  imports:[FormsModule,CommonModule]
})
export class PaginaUsuarioComponent {


  nombre:string
  apellido:string
  password:string
  nombreUsuario:string
  correo:string
  direccion:string
  telefono: number

  respuestaValidacion:boolean
  respuestaRegistro:Usuario
  error=""


  constructor(private usuarioService: UsuarioService, private router: Router) {}



  validarUsuario() {
    var loginData = {
      userName: this.nombreUsuario,
      password: this.password
    }
    this.usuarioService.validarUsuario(loginData.userName,loginData.password)
      .subscribe(data => {
      console.log("component",data),
      this.respuestaValidacion = data});

    }

    nuevoUsuario(){
       const newUserData = {
        nombre: this.nombre,
        apellido: this.apellido,
        nombreUsuario:this.nombreUsuario,
        password:this.password,
        correo: this.correo,
        direccion: this.direccion,
        telefono: this.telefono
       }
      this.usuarioService.nuevoUsuario(newUserData)
      .subscribe(data=> this.respuestaRegistro = data)

    }
 }

