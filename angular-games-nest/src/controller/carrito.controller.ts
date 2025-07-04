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
import { UpdateResult } from 'typeorm';

@Controller('carrito')
export class CarritoController {
  constructor(
    private readonly carritoService: CarritoService,
    private almacenService:AlmacenService
  ) {}

@Post("agregarCarrito")
async agregarAlCarrito(@Body() pedido:CarritoDto, @Res() response:Response){
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
      return response.status(418).json({});
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
async numeroDePedido():Promise<number>{
  console.log("el back ha recibido el pedido del numero de carrito")
  let pedido:CarritoDto[] = await this.carritoService.numeroDeCarrito();
  let numeroPedido:number = Math.max(...pedido.map(m=>m.numPedido));
  console.log("el numero de pedido del controller es "+ numeroPedido)
  return numeroPedido
}

@Delete("eliminarCarrito/:nombre")
borrarDelCarrito(@Param("nombre") nombre:string):Promise<boolean>{
  console.log("controller post carrito a borrar "+nombre)
return this.carritoService.eliminarDelCarrito(nombre);
}

@Patch('unidades')
async cambiarUnidades(@Body() pedido:CarritoDto, @Res() response:Response){
  console.log("ha entrado el ",pedido," en el controller")
  let stock:number = await this.almacenService.consultarStockArticulo(pedido.nombreArticulo);
  if(pedido.cantidad>stock){
    console.log("no hay stock)");
    return response.status(418).json({mensaje:"No hay stock suficiente"})
    }else{
    console.log("hay stock")
    let carritoCambiado = await this.carritoService.cambiarUnidades(pedido)
    let almacenActualizado = this.almacenService.reducirStock(pedido.nombreArticulo,pedido.cantidad);

    if(carritoCambiado){
    return response.status(202).json({mensaje:"Pedido Actualizado"});
    }

    }

}
}
