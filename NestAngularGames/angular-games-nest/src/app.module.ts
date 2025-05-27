import { Module } from '@nestjs/common';
import { ArticulosController } from './controller/articulos.controller';
import { UsuariosController } from './controller/usuarios.controller';
import { ArticulosService } from './service/articulos.service';
import { UsuariosService } from './service/usuarios.service';
import { Juego } from './Model/Juego';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Model/Usuario';
import { productoAlmacen } from './Model/productoAlmacen';
import { AlmacenService } from '../../../AngularGames/angular-games-nest/src/service/almacen.service';

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
    TypeOrmModule.forFeature([Juego, Usuario, productoAlmacen])],
  controllers: [ArticulosController,UsuariosController],
  providers: [ArticulosService,UsuariosService, AlmacenService],
})
export class AppModule {}
