//Model Angular Usuario
export class Usuario {
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  password: string;
  correo: string;
  direccion: string;
  telefono: number;
  roles:string;

  constructor(
    nombre?: string,
    apellido?: string,
    nombreUsuario?: string,
    password?: string,
    correo?: string,
    direccion?: string,
    telefono?: number,
    roles?:string,
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreUsuario = nombreUsuario;
    this.password = password;
    this.correo = correo;
    this.direccion = direccion;
    this.telefono = telefono;
    this.roles=roles;
  }
}
