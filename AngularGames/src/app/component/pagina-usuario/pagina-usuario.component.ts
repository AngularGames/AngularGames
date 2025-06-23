
import { UsuarioService } from './../../services/usuarios/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { Login } from '../../models/Login';

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

  respuestaValidacion:string
  respuestaRegistro:Usuario
  error=""


  constructor(private usuarioService: UsuarioService, private router: Router) {}



  validarUsuario() {
    var loginData:Login = {
      userName: this.nombreUsuario,
      password: this.password,
      roles:""
    };
    console.log("logindata de componente ",loginData)
    this.usuarioService.validarUsuario(loginData).subscribe(data=>{
      console.log(data);
      this.respuestaValidacion=data;
      if(this.respuestaValidacion=="usuario"){
        return console.log("BIENVENIDO ",loginData.userName)
      }else if(this.respuestaValidacion=="admin"){
        return console.log("hola, ",loginData.userName)}
        else return console.log("no te conozco")
    });


    }

    nuevoUsuario(){
       const newUserData = {
        nombre: this.nombre,
        apellido: this.apellido,
        nombreUsuario:this.nombreUsuario,
        password:this.password,
        correo: this.correo,
        direccion: this.direccion,
        telefono: this.telefono,
        roles:"usuario"
       };
      this.usuarioService.nuevoUsuario(newUserData)
      .subscribe(data=> this.respuestaRegistro = data)

    }
 }

