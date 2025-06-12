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
  /*
  async validarUsuario(
    usuarioBuscado: string,
    password: string,
  ): Promise<boolean> {
    const resultado: Usuario = await this.usuariosRepository.findOneBy({
      nombreUsuario: usuarioBuscado,
      //password: password,
    });
    console.log(resultado);
    if (resultado == null) {
      return false;
    } else {
      if (
        resultado.nombreUsuario == usuarioBuscado &&
        resultado.password == password
      ) {
        //creo que es redundante
        return true;
      } else {
        return false;
      }
    }
  }
*/
  crearUsuario(usuario: Usuario): Promise<Usuario> {
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
