import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/Model/Usuario';

@Injectable()
export class UsuariosService {


    validarUsuario(nombreUsuario:string,password:string):boolean{
        if (this.bdUsuarios.find(usuario=>usuario.nombreUsuario==nombreUsuario&&usuario.password==password)){
          return true
      }
    
      crearUsuario(usuario:Usuario):void{
        this.bdUsuarios.push(usuario);
      }
    
      eliminarUsuario(usuario:string):void{
        this.bdUsuarios.map(usuarios=>usuarios.nombreUsuario!=usuario);

}
}
