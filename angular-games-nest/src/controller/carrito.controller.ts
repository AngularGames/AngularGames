import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CarritoDto } from 'src/Dtos/CarritoDto';
import { AlmacenService } from 'src/service/almacen.service';
import { CarritoService } from 'src/service/carrito.service';
import { Response } from 'express';
import { max } from 'rxjs';

@Controller('carrito')
export class CarritoController {
  constructor(
    private readonly carritoService: CarritoService,
    private almacenService:AlmacenService
  ) {}

@Post("agregarCarrito")
async agregarAlCarrito(@Body() pedido:CarritoDto, @Res() response:Response){
  console.log("este pedido ha entrado"+pedido);
  console.log(pedido.cantidad,pedido.nombreArticulo,pedido.precio);
  let stock:number = await this.almacenService.consultarStockArticulo(pedido.nombreArticulo);
  if(pedido.cantidad>stock){
    console.log("no hay stock)")
    return response.status(408).send("no hay stock suficiente");
  } else {
    console.log("hay stock")
    this.almacenService.reducirStock(pedido.nombreArticulo,pedido.cantidad)
    let respuesta:CarritoDto = await this.carritoService.agregarAlCarrito(pedido);

    if (respuesta){
      return response.status(202).json(respuesta);
    }else{
      return response.status(408).send();
    }
  }
}

@Get("mostrar/:pedido")

async mostrarCarrito(@Param("pedido") pedido:number):Promise<CarritoDto[]>{
  console.log("este es el numero de pedido para consultar "+pedido)
   const respuesta:CarritoDto[] = await this.carritoService.mostrarCarrito(pedido)
   return respuesta
}

@Get("numeroPedido")
async numeroDePedido(){
  let pedido:CarritoDto[] = await this.carritoService.numeroDeCarrito();
  return Math.max(...pedido.map(m=>m.numPedido));
}

}
