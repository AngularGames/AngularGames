import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Juego } from 'src/Model/Juego';
import { LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class ArticulosService {
constructor(@InjectRepository(Juego) private juegoRepository:Repository<Juego>){}
  
  async elegirJuego(nombre:string):Promise<Juego>{
    const resultado= await this.juegoRepository.findOneBy({nombre:nombre})
    return resultado;
    
  }

  async filtrarTipo(tipo:string):Promise<Juego[]>{
    const resultado:Juego[]= await this.juegoRepository.findBy({tipo:tipo});
    return resultado;

  }

  async filtrarJugadores(jmin:string,jmax:string):Promise<Juego[]>{
    const resultado:Juego[]= await this.juegoRepository.findBy({
      jugadoresMin:MoreThanOrEqual(jmin),
      jugadoresMax:LessThanOrEqual(jmax)}
    );
    return resultado;


  }

  async filtrarDificultad(dificultad:number):Promise<Juego[]>{
    const resultado:Juego[]= await this.juegoRepository.findBy({dificultad:dificultad})
    return resultado
  }


  async agregarJuego(juego:Juego):Promise<boolean>{
    console.log("este juego ha entrado ",juego)
    const resultado = await this.juegoRepository.save(juego);
    if (resultado) return true
    else return false
  }

  async mostrarTodos(){
    const todos = await this.juegoRepository.find();
    return todos.map(m=>m.nombre);
  }

  async cargarJuegos(){
    const todos = await this.juegoRepository.find();
    return todos
  }

}
