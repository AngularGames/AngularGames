import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { UsuariosService } from '../service/usuarios.service';
import { Response } from 'express';
import { Usuario } from 'src/Model/Usuario';
import { UsuarioDto } from 'src/Dtos/UsuarioDto';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('validar')
  async validarUsuario(@Body() body: { usuario: string; password: string },@Res() response: Response){
    const resultado: boolean = await this.usuariosService.validarUsuario(
    body.usuario,body.password
    );
    if (resultado) {
      response.status(200).send('USUARIO CORRECTO');
    } else {
      response.status(409).send('ERROR: USUARIO O CONTRASEÑA INCORRECTO');
    } 
  }

  @Post('registro')
async nuevoUsuario(@Body() usuario: UsuarioDto, @Res() response: Response) {
    const nuevoUsuario = await this.usuariosService.nuevoUsuario(usuario);
    console.log(nuevoUsuario)
    if (nuevoUsuario) {
      response.status(200).send("Usuario registrado con exito");
    } else {
      response.status(409).send("Error: No ha rellenado los campos necesarios");
    }
  }
}

