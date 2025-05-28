import { Module } from '@nestjs/common';
import { ArticulosController } from './controller/articulos.controller';
import { UsuariosController } from './controller/usuarios.controller';
import { ArticulosService } from './service/articulos.service';
import { UsuariosService } from './service/usuarios.service';
import { Juego } from './Model/Juego';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Model/Usuario';
import { productoAlmacen } from './Model/productoAlmacen';

@Module({
  imports: [TypeOrmModule.forRoot({ 
    type: 'mysql', 
    host: 'localhost', 
    port: 3306, 
    username: 'nestuser', 
    password: 'nestpass', 
    database: 'juegosdemesa', 
    entities: [Juego, Usuario, productoAlmacen], 
    synchronize: false, 
    }),
    TypeOrmModule.forFeature([Juego, productoAlmacen,Usuario])],
  controllers: [ArticulosController,UsuariosController],
  providers: [ArticulosService,UsuariosService],
})
export class AppModule {}
