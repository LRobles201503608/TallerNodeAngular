import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListaPeliculasComponent} from './components/lista-peliculas/lista-peliculas.component';
import {NuevaPeliculaComponent} from './components/nueva-pelicula/nueva-pelicula.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: ListaPeliculasComponent
  },{
    path: 'nueva',
    component: NuevaPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
