import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListaPeliculasComponent} from './components/lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: ListaPeliculasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
