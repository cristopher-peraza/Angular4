import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//Necesario para utilizar el two way data-binding.
//Importacion de los componentes.
import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
//Importacion de routing
import {routing, appRoutingProviders } from './app.routing';



//Declaracion de los nombres de los componenetes.
@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,//Necesario para utilizar el two way data-binding.
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
