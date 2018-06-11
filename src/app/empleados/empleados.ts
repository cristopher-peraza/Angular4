export class Empleados{
/*
//Normalemente pasariamos los parametros de esta manera.

  public nombre:string;
  public edad:number;

  constructor(nombre, edad){
      this.nombre = nombre;
      this.edad   =   edad;

  }

  */
//Definicion de modelo.
//Esto es equivalente a la estructra de arriba.
//Esto automaticamente te inicializa la propiedad y asiguna un valor que llega por parametro.
//
  constructor(
    public nombre:string,
    public edad:number,
    public cargo:string,
    public contratado:boolean
  ){}

}
