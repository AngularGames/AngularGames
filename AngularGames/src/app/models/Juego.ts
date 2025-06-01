export class Juego{
  nombre:string;
  tipo:string;
  jugadoresMin:string;
  jugadoresMax:string;
  dificultad:string;
  descripcion:string;

constructor(nombre?:string,tipo?:string,jugadoresMin?:string,jugadoresMax?:string,dificultad?:string,descripcion?:string){

  this.nombre=nombre;
  this.tipo=tipo;
  this.jugadoresMin=jugadoresMin;
  this.jugadoresMax=jugadoresMax;
  this.dificultad=dificultad;
  this.descripcion=descripcion;

}

}