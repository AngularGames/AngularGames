import { Module } from '@nestjs/common';
import { ArticulosController } from './controller/articulos.controller';
import { UsuariosController } from './controller/usuarios.controller';
import { ArticulosService } from './service/articulos.service';
import { UsuariosService } from './service/usuarios.service';
import { Juego } from './Model/Juego';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Model/Usuario';
import { productoAlmacen } from './Model/productoAlmacen';
import { AlmacenService } from './service/almacen.service';
import { AlmacenController } from './controller/almacen.controller';
import { Carrito } from './Model/Carrito';
import { CarritoController } from './controller/carrito.controller';
import { CarritoService } from './service/carrito.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestuser',
      password: 'nestpass',
      database: 'basedatosjuegos',
      entities: [Juego, Usuario, productoAlmacen,Carrito],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Juego, productoAlmacen, Usuario,Carrito]),
  ],
  controllers: [ArticulosController, UsuariosController, AlmacenController,CarritoController],
  providers: [ArticulosService, UsuariosService, AlmacenService,CarritoService],
})
export class AppModule {}
