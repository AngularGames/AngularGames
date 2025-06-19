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
import { productoAlmacen } from 'src/Model/productoAlmacen';
import { AlmacenService } from 'src/service/almacen.service';
import { Response } from 'express';
import { StockDto } from 'src/Dtos/StockDto';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService:AlmacenService) {}


// Funciona. sube el stock X
/*
  @Patch('stock')
  incrementarStock(@Query("articulo") articulo:string, @Query("cantidad") cantidad:number){
    this.almacenService.agregarStockDeProducto(articulo,cantidad)
  }
*/
  

  //Devuelve el Stock
  @Get("articulo/:articulo")
   async consultarStock(@Param("articulo") articulo:string):Promise<number>{
    const stock:number=await this.almacenService.consultarStockArticulo(articulo)
    console.log("stock controller "+stock)
   return stock
    
  }
@Get("lista")
    consultarAlmacen():Promise<productoAlmacen[]>{
      return this.almacenService.mostrarInventario();
    }
@Post("agregar")
    async agregarProducto(@Body("producto") producto:any, @Res() response:Response){
      console.log("lo que entra es "+producto.nombre)
      const respuesta = await this.almacenService.agregarProducto(producto);
      console.log(respuesta)
      if (respuesta){
        return response.status(202).json(respuesta)
      }else{
        return response.status(419).send()
      }
    }
@Post("stock")
     async actualizarStock(@Body() stock:StockDto, @Res() response:Response){
      console.log("entra aqui?")
      const respuesta = await this.almacenService.actualizarStock(stock);
      if(respuesta){
        return response.status(202).json(respuesta)
      } else return response.status(419).send()
    }
  }

  


