import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity("usuarios")
export class Usuario{
    @PrimaryGeneratedColumn()
    idUsuario:string;
    @Column()
    nombre:string;
    @Column()
    apellido:string;
    @Column()
    nombreUsuario:string;
    @Column()
    password:string;
    @Column()
    correo:string;
    @Column()
    direccion:string;
    @Column()
    telefono:number;
    
    constructor(
      idUsuario?:string,
      nombre?:string,
      apellido?:string,
      nombreUsuario?:string,
      password?:string,
      correo?:string,
      direccion?:string,
      telefono?:number,
    )
      {
        this.idUsuario=idUsuario;
        this.nombre=nombre;
        this.apellido=apellido;
        this.nombreUsuario=nombreUsuario;
        this.password=password;
        this.correo=correo;
        this.direccion=direccion;
        this.telefono=telefono;
      }
  }