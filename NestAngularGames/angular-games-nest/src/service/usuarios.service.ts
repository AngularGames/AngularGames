import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/Model/Usuario';

@Injectable()
export class UsuariosService {

    bdUsuarios:Usuario[]=[
        new Usuario("1","nombre1","apellido1","usuario1","password1","correo1","calle1",1111111),
        new Usuario("2","nombre2","apellido2","usuario2","password2","correo2","calle1",2222222),
        new Usuario("3","nombre3","apellido3","usuario3","password3","correo3","calle1",3333333)
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
