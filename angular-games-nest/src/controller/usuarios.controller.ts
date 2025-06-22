import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { UsuariosService } from '../service/usuarios.service';
import { Response } from 'express';
import { Usuario } from 'src/Model/Usuario';
import { UsuarioDto } from 'src/Dtos/UsuarioDto';
import { Login } from 'src/Model/Login';
import { map } from 'rxjs';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('validar')
  async validarUsuario(@Body() login:Login,@Res() response: Response){

    console.log("al controller le dan esto ",login)
    let resultado:UsuarioDto = await this.usuariosService.validarUsuario(login);
    console.log("el controller recive del serviceBACK ",resultado)
      if (resultado) {
      response.cookie("user",resultado.roles,{
        httpOnly:true,
        maxAge:24*60*60*1000,
        secure:false
      });
      console.log("esta es la cookie ",response.cookie)
      return response.json(resultado)
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

