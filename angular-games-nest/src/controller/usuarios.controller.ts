import {
  Controller,
  Get,
  Post,
  Query
  
} from '@nestjs/common';
import { UsuariosService } from '../service/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService:UsuariosService) {}

  @Get("validar")
  validarUsuario(@Query("usuario")usuario:string,@Query("password")password:string){
    this.usuariosService.validarUsuario(usuario,password);


  }


}
