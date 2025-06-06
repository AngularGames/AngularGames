import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ArticulosService } from 'src/service/articulos.service';
import { Juego } from 'src/Model/Juego';
import { Observable } from 'rxjs';
import { Response } from 'express';

@Controller('articulos')
export class ArticulosController {
  constructor(private articulosService: ArticulosService) {}


@Get("/mostrar/todos")
async mostrarTodos():Promise<string[]>{
return await this.articulosService.mostrarTodos()
}

  @Get("/buscar/juego/:nombre")
 buscarJuego(@Param("nombre") nombre:string){
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

@Post("alta")
async guardarjuego(@Body() juego:Juego, @Res() response:Response):Promise<Response>{
  console.log("ha entrado en el controller ",juego)
  const resultado:boolean= await this.articulosService.agregarJuego(juego);
  if(resultado){
    return response.status(200).send("Todo ok")
  }else{
    return response.status(409).send("Meh... no")
  }

}

}
