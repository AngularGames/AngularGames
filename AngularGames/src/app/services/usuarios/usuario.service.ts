import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  validarUsuario(nombreUsuario: string, password: string): boolean {
    if (
      this.bdUsuariosfind(
        (usuario) =>
          usuario.nombreUsuario == nombreUsuario && usuario.password == password
      )
    ) {
      return true;
    } else return false;
  }

  crearUsuario(usuario: Usuario): void {
    this.bdUsuarios.push(usuario);
  }

  eliminarUsuario(usuario: string): void {
    this.bdUsuarios.map((usuarios) => usuarios.nombreUsuario != usuario);
  }
}
