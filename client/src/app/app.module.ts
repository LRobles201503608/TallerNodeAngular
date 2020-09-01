import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { NuevaPeliculaComponent } from './components/nueva-pelicula/nueva-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent,
    NuevaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
