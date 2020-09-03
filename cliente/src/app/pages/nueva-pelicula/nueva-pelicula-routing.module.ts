import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaPeliculaPage } from './nueva-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaPeliculaPageRoutingModule {}
