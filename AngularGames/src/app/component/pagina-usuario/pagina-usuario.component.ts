import { UsuarioDto } from './../../../../../angular-games-nest/src/Dtos/UsuarioDto';
import { UsuarioService } from './../../services/usuarios/usuario.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: "./pagina-usuario.component.html",
  imports:[FormsModule,CommonModule]
})
export class PaginaUsuarioComponent {
  userName = ''
  password = ''
  nombre = ""
  apellido = ""
  nombreUsuario = ""
  correo = ""
  direccion = ""
  telefono = 0

  constructor(private usuarioService: UsuarioService, private router: Router) {}
  validarUsuario() {
    const loginData = {
      userName: this.userName,
      password: this.password
    }
    this.usuarioService.validarUsuario(loginData.userName,loginData.password)
     /* .subscribe({
        next: (response) => {
          // Guardar token u otra info
          localStorage.setItem('token', response.token);
          // Navegar a otra ruta o mostrar mensaje
          this.router.navigate(['/dashboard']);
        },
         error: (err) => {
          this.error = 'Credenciales inválidas';
        }
      });*/
      console.log("boton funciona")
    }

    nuevoUsuario(){
      const newUserData:UsuarioDto = {
        nombre: this.nombre,
        apellido: this.apellido,
        nombreUsuario:this.nombreUsuario,
        password:this.password,
        correo: this.correo,
        direccion: this.direccion,
        telefono: this.telefono
      }
      console.log(newUserData)
      this.usuarioService.nuevoUsuario(newUserData)
      console.log("boton funciona")
    }
  }


