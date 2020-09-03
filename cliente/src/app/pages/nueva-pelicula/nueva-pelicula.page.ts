import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/models/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-pelicula',
  templateUrl: './nueva-pelicula.page.html',
  styleUrls: ['./nueva-pelicula.page.scss'],
})
export class NuevaPeliculaPage implements OnInit {

 
  constructor(private pelicula:PeliculasService,private router:Router) { }

  peliculas:Pelicula={
    titulo: '',
    descripcion: '',
    imagen: ''
  };
  ngOnInit() {
    
  }

  send(){
      console.log(this.peliculas);
      this.pelicula.newMovie(this.peliculas).subscribe(
        res=>{
          this.router.navigate(['/lista-peliculas'])
        },
        err=>{
          console.log(err);
        }
      );
  }
}
