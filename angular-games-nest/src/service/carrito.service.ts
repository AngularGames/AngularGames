import { Injectable } from '@nestjs/common';
import { Carrito } from 'src/Model/Carrito';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CarritoDto } from 'src/Dtos/CarritoDto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito) private carritoRepository:Repository<Carrito>
  )
  {}


async agregarAlCarrito(pedido:CarritoDto):Promise<CarritoDto>{
  return await this.carritoRepository.save(pedido)

}

async eliminarDelCarrito(nombreArticulo:string):Promise<boolean>{
  // Deberia de borrar el articulo en el que hace clicl
  console.log("service back nombre juego borrar es "+nombreArticulo)
  const respuesta:DeleteResult = await this.carritoRepository.delete({nombreArticulo:nombreArticulo});
  return respuesta.affected>0

}

mostrarCarrito(numPedido:number):Promise<CarritoDto[]>{
  return this.carritoRepository.findBy({numPedido:numPedido});
}

numeroDeCarrito():Promise<CarritoDto[]>{
  return this.carritoRepository.find();
}



}
