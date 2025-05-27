import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/Model/Usuario';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}
<<<<<<< HEAD
    async validarUsuario(nombreUsuario:string,password:string):Promise<boolean>{
      const usuario:Usuario = await this.usuariosRepository.findOneBy({nombreUsuario:nombreUsuario,password:password})
      if(usuario.nombreUsuario==nombreUsuario&&usuario.password==password){ //creo que es redundante
      return true
    }else{ return false
=======
/*    async validarUsuario(nombreUsuario:string,password:string):Promise<boolean>{
      const validacion:Usuario = await this.movimientosRepository.findOneBy({nombreUsuario:nombreUsuario,password:password})
      if(validacion){
      return 
    }else{
>>>>>>> 0b82556f5aee420d65431c0f0955673f54614be0
      
    }
    */

  // Creo que es algo redundante, no estoy seguro. pero tengo que mirarlo. 
    async validarUsuario(nombreUsuario:string,password:string):Promise<boolean>{
      const usuario:Usuario = await this.usuariosRepository.findOneBy({nombreUsuario:nombreUsuario,password:password})
      if(usuario.nombreUsuario==nombreUsuario&&usuario.password==password){ //creo que es redundante
      return true
    }else{ return false
      
    }
  }

  
  }

    
      crearUsuario(usuario:Usuario):Promise<Usuario>{
       return this.usuariosRepository.save(usuario);
      }
<<<<<<< HEAD
    
=======

/*
      eliminarUsuario(usuario:string):void{
        this.movimientosRepository.map(usuarios=>usuarios.nombreUsuario!=usuario);
}
*/

// He cambiado esto porque el metodo es delete y no map.
// Lo probamos en clase que en mi Visual Studio Code ha petado el nest
>>>>>>> 0b82556f5aee420d65431c0f0955673f54614be0
      eliminarUsuario(usuario:string):Promise<DeleteResult>{
        //cambio el map por el delete, que el repositorio no tiene map.
        const resultado = this.usuariosRepository.delete({nombreUsuario:usuario});
        console.log("la eliminación ha sido "+resultado);
        return resultado;
      }
<<<<<<< HEAD
    }
=======


}
>>>>>>> 0b82556f5aee420d65431c0f0955673f54614be0
