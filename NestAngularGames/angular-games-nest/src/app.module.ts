import { Module } from '@nestjs/common';
import { ArticulosController } from './controller/articulos.controller';
import { UsuariosController } from './controller/usuarios.controller';
import { ArticulosService } from './service/articulos.service';
import { UsuariosService } from './service/usuarios.service';

@Module({
  imports: [],
  controllers: [ArticulosController,UsuariosController],
  providers: [ArticulosService,UsuariosService],
})
export class AppModule {}
