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
  userName = '';
  password = '';
  error = '';

<<<<<<< HEAD
  constructor(private http: HttpClient, private router: Router) {}
  onSubmit() {
    const loginData = {
      userName: this.userName,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000/usuarios/validar', loginData)
      .subscribe({
        next: (response) => {
          // Guardar token u otra info
          localStorage.setItem('token', response.token);
          // Navegar a otra ruta o mostrar mensaje
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.error = 'Credenciales inválidas';
        }
      });

    }
  }
=======
}
>>>>>>> e38a2bc1d2dbb4a96a8500379286f5c7d2512a91
