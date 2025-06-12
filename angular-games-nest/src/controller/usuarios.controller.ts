import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { UsuariosService } from '../service/usuarios.service';
import { Response } from 'express';
import { Usuario } from 'src/Model/Usuario';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
/*
  @Post('validar')
  async validarUsuario(@Body() body: { usuario: string; password: string },
    @Res() response: Response,
  ) {
    const resultado: boolean = await this.usuariosService.validarUsuario(
    body.usuario,body.password
    );
    if (resultado) {
      response.status(200).send('USUARIO CORRECTO');
    } else {
      response.status(409).send('ERROR: USUARIO O CONTRASEÑA INCORRECTO');
    }
  }
*/
  @Post('registro')
  create(@Body() usuario: Usuario): void {
    this.usuariosService.crearUsuario(usuario);
  }
}
