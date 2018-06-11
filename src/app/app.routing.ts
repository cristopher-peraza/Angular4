import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes
import{ EmpleadosComponent }  from './empleados/empleados.component';
import{ FrutasComponent }  from './frutas/frutas.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


//Variable que no va a cambiar
const appRoutes: Routes = [
  {path: '', component: HomeComponent},//Ruta inicial(Cuando url no tiene nada, carga componente empleado)
  {path: 'app-empleados', component: EmpleadosComponent},
  {path: 'app-frutas', component: FrutasComponent},
  //{path: '**', component: EmpleadosComponent,//Cuando exista un error, carga el componente empleado.
  {path: 'app-home', component: HomeComponent},
  {path: 'app-contacto', component: ContactoComponent}
];

export const appRoutingProviders: any[] = [];//Procedimiento que necesita angular.

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
