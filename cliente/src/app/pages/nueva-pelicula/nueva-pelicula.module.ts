import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaPeliculaPageRoutingModule } from './nueva-pelicula-routing.module';

import { NuevaPeliculaPage } from './nueva-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaPeliculaPageRoutingModule
  ],
  declarations: [NuevaPeliculaPage]
})
export class NuevaPeliculaPageModule {}
