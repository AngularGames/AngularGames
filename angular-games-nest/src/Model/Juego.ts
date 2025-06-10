import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("juegos")
export class Juego{
    @PrimaryGeneratedColumn()
    idArticulo:number;
    @Column()
    nombre:string;
    @Column()
    tipo:string;
    @Column()
    jugadoresMin:string;
    @Column()
    jugadoresMax:string;
    @Column()
    dificultad:number;
    @Column()
    descripcion:string;
    @Column()
    precio:number;
    @Column()
    imagen:string;


  
  constructor(idArticulo?:number,nombre?:string,tipo?:string,jugadoresMin?:string,jugadoresMax?:string,dificultad?:number,descripcion?:string,precio?:number,imagen?:string){
  
    this.idArticulo=idArticulo;
    this.nombre=nombre;
    this.tipo=tipo;
    this.jugadoresMin=jugadoresMin;
    this.jugadoresMax=jugadoresMax;
    this.dificultad=dificultad;
    this.descripcion=descripcion;
    this.precio=precio;
    this.imagen=imagen;
  
  }


}