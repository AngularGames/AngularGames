import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/Model/Usuario';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private movimientosRepository: Repository<Usuario>,
  ) {}
    async validarUsuario(nombreUsuario:string,password:string):Promise<boolean>{
      const validacion:Usuario = await this.movimientosRepository.findOneBy({nombreUsuario:nombreUsuario,password:password})
      if(validacion){
      return 
    }else{
      
    }
  }

    
      crearUsuario(usuario:Usuario):Promise<Usuario>{
       return this.movimientosRepository.save(usuario);
      }
    
      eliminarUsuario(usuario:string):void{
        this.movimientosRepository.map(usuarios=>usuarios.nombreUsuario!=usuario);

}
}
