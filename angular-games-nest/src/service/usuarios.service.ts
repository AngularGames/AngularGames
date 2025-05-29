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
    async validarUsuario(nombreUsuario:string,password:string):Promise<boolean>{
      const usuarioBuscado:Usuario = await this.usuariosRepository.findOneBy({nombreUsuario:nombreUsuario,password:password})
      if(usuarioBuscado.nombreUsuario==nombreUsuario&&usuarioBuscado.password==password){ //creo que es redundante
      return true
    }else{ return false
      
    }
  }

      crearUsuario(usuario:Usuario):Promise<Usuario>{
       return this.usuariosRepository.save(usuario);
      }
    
      eliminarUsuario(usuario:string):Promise<DeleteResult>{
        //cambio el map por el delete, que el repositorio no tiene map.
        const resultado = this.usuariosRepository.delete({nombreUsuario:usuario});
        console.log("la eliminación ha sido "+resultado);
        return resultado;
      }
    }
