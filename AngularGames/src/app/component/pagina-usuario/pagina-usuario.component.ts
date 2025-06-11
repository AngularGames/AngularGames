import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class PaginaUsuarioComponent {
  dni = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = {
      dni: this.dni,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000//login', loginData)
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
