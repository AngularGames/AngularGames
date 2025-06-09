import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuarios/usuario.service';

@Component({
  selector: 'app-pagina-usuario',
  imports: [],
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.css',
})
export class PaginaUsuarioComponent {
  nombre: string;
  password: string;
  usuarios: Usuario[] = [];
  constructor(private usuarioService: UsuarioService) {}

  nuevoUsuario(): Observable<Usuario> {
    return this.usuarioService.crearUsuario();
  }
}
