import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AngularGamesService } from './angular-games.service';
import { Juego } from 'src/Model/Juego';

@Controller('angular-gamess')
export class AngularGamesController {
  constructor(private readonly angulargamesService: AngularGamesService) {}

  juego:Juego;

//es mejor varios servicios? o un servicio con varias llamadas?

//@Get()
// Get buscador de articulos
buscarArticulo(nombre:string):{

}

// Get consultar info artículo en web
mostrarArticulo(){

}
// Get validar usuarios
loginUsuario(){

}

// Delete borrar usuarios? articulos? futuro.


// @PUT para la cantidad en almacen?
actualizarAlmacen(){

}


//@Post() // Para dar de alta usuarios y articulos

}
