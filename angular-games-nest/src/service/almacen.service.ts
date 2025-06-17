import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { productoAlmacenDto } from 'src/Dtos/productoAlmacenDto';
import { productoAlmacen } from 'src/Model/productoAlmacen';
import { LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AlmacenService {
constructor(@InjectRepository(productoAlmacen) private almacenRepository:Repository<productoAlmacen>){}



async agregarProducto(producto:productoAlmacenDto):Promise<boolean>{
    console.log("ha entrado en almacen serv back "+producto.nombre)
    const resultado = await this.almacenRepository.save(producto);
    if(resultado) return true

}

    async agregarStockDeProducto(producto:string,cantidadStock:string):Promise<UpdateResult>{
       return await this.almacenRepository.increment({nombre:producto},"cantidad",cantidadStock)
       }
    
    async consultarStockArticulo(producto:string):Promise<number>{
        console.log("ha entrado "+producto+" para mirar el stock")
        const resultado= await this.almacenRepository.findOneBy({nombre:producto})
        console.log("el stock es de "+resultado.cantidad+" unidades")
        return resultado.cantidad

       }

       mostrarInventario():Promise<productoAlmacen[]>{

        return this.almacenRepository.find();
       }

       reducirStock(producto:string,pedido:number){
        this.almacenRepository.decrement({nombre:producto},"cantidad",pedido)
       }



}