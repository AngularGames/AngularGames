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

async eliminarDelCarrito(nombre:string):Promise<boolean>{
  // Deberia de borrar el articulo en el que hace clicl
  console.log("service back nombre juego borrar es "+nombre)
  const respuesta:DeleteResult = await this.carritoRepository.delete({nombreArticulo:nombre});
  return respuesta.affected>0

}

async mostrarCarrito(numPedido:number):Promise<CarritoDto[]>{
  return await this.carritoRepository.findBy({numPedido:numPedido});
}

async numeroDeCarrito():Promise<CarritoDto[]>{
  console.log("el pedido del numero ha entrado en carrito service back");
  return await this.carritoRepository.find();
}



}
