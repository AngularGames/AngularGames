import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/Model/Usuario';
import { DeleteResult, Repository } from 'typeorm';
import { UsuarioDto } from 'src/Dtos/UsuarioDto';
import { Login } from 'src/Model/Login';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}
  
  async validarUsuario(login:Login):Promise<UsuarioDto>{
    const resultado: Usuario = await this.usuariosRepository.findOneBy({
      nombreUsuario:login.userName
    });
    console.log("resultado de la busquedafindby",resultado)
    if(resultado.nombreUsuario==login.userName && resultado.password==login.password) return resultado;
    else return null
  }

    nuevoUsuario(usuario: UsuarioDto): Promise<UsuarioDto> {
    return this.usuariosRepository.save(usuario);
  }

  eliminarUsuario(usuario: string): Promise<DeleteResult> {
    const resultado = this.usuariosRepository.delete({
      nombreUsuario: usuario,
    });
    console.log('la eliminación ha sido ' + resultado);
    return resultado;
  }
}
