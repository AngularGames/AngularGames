import {
  Controller,
  Get,
  Post,
  Query,
  Res
  
} from '@nestjs/common';
import { UsuariosService } from '../service/usuarios.service';
import { Response } from 'express';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService:UsuariosService) {}

  @Get("validar")
  async validarUsuario(@Query("usuario") usuario:string,@Query("password") password:string, @Res() response:Response){
    const resultado:boolean = await this.usuariosService.validarUsuario(usuario,password);
    if (resultado) {
      response.status(200).send("USUARIO CORRECTO");
    } else {
      response.status(419).send("ERROR: USUARIO O CONTRASEÑA INCORRECTO")
    }


  }


}
