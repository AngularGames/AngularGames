import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ArticulosService } from 'src/service/articulos.service';
import { Juego } from 'src/Model/Juego';

@Controller('articulos')
export class ArticulosController {
  constructor(private readonly articulosService: ArticulosService) {}

@Get("/buscar/juego/:nombre")
 buscarJuego(@Param("nombre")nombre:string){
   return this.articulosService.elegirJuego(nombre);
};
@Get("buscar/tipo/:tipo")
buscarTipo(@Param("tipo")tipo:string){

  return this.articulosService.filtrarTipo(tipo);
};

@Get("/buscar/jugadores")
buscarJugadores(@Query("jmin") jmin:string,@Query("jmax")jmax:string){
  return this.articulosService.filtrarJugadores(jmin,jmax);

};

@Get("/buscar/dificultad/:dificultad")
buscarDificultad(@Param("dificultad") dificultad:number){
return this.articulosService.filtrarDificultad(dificultad);

};

@Post("/alta")
save(@Body() juego:Juego){
  this.articulosService.agregarJuego(juego);
}

}
