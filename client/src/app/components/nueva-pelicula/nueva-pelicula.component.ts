import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-pelicula',
  templateUrl: './nueva-pelicula.component.html',
  styleUrls: ['./nueva-pelicula.component.css']
})
export class NuevaPeliculaComponent implements OnInit {

  fac:Pelicula={
    titulo: '',
    descripcion: '',
    imagen: ''
  }
  constructor(private peliculas:PeliculaService, private router:Router) { }

  ngOnInit() {
  }
  saveNew(){
    this.peliculas.newMovie(this.fac).subscribe(
      res=>{
        this.router.navigate(['/lista']);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
