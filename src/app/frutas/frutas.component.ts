import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutas',//Nombre del selector para invocarlo donde queramos.
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']


})
export class FrutasComponent {
  public nombre_componente = 'Componente de Frutas';
  public listado_frutas = 'Componente de Frutas2';

  //Tipo de Datos(propiedades).
  public nombre:string;
  public edad:number
  public MAYORdeEdad:boolean;
  public trabajos:Array<any>;//any, permite introducir cualquier tipo de dato en el arreglo.

  //Constructor
  //Es el primer metodo que se ejecuta, dentro de una clase.
  //Una bunea practica es asignar los valores a las propiedades dentro del constructor.
  constructor(){
    this.nombre = "cris";
    this.edad = 100;
    this.MAYORdeEdad = true;
    this.trabajos = ["Trabajo1",2,"Trabajo 3"];


    }

    //Asignacion de nuevos valores para utilizarlos en ngOnInit.
    cambiarNombre(){
      this.nombre = "andrew";
    }
    cambiarEdad(){
      this.edad = 200;
    }

    // ngOnInit es utilizado para llamar metodos y hacer funcionalidades.
    //Es el primero que se carga al lanzar un componente despues del constructor.
      ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad();
        console.log(this.nombre + " " + this.edad);

        //Variables y alcance
        var x = 10;
        var y =  5;

        if(x === 10){
          let x = 9;//lent, solo exixste a nivel de este bloque(Dentro de if) y no afecta el la variable global la cual es (  var x = 10;).
          var y = 4;
            console.log("Dentro del if:" + x);
        }
        console.log("Fuera del if:" + x );
      }

  }
