import {
  Controller,
  Get,
  Post
  
} from '@nestjs/common';
import { UsuariosService } from '../service/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService:UsuariosService) {}

}
