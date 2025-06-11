export class Juego{

  nombre:string;
  tipo:string;
  jugadoresMin:string;
  jugadoresMax:string;
  dificultad:number;
  descripcion:string;
  precio:number;
  imagen:string;

constructor(nombre?:string,tipo?:string,jugadoresMin?:string,jugadoresMax?:string,dificultad?:number,descripcion?:string,precio?:number,imagen?:string){

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