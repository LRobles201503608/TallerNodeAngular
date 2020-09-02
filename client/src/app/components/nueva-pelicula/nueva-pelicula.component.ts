import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-nueva-pelicula',
  templateUrl: './nueva-pelicula.component.html',
  styleUrls: ['./nueva-pelicula.component.css']
})
export class NuevaPeliculaComponent implements OnInit {

  peli:Pelicula={
    titulo:'',
    descripcion:'',
    imagen:''
  }
  constructor(private pelicula:PeliculaService) { }

  ngOnInit() {
  }

  saveNew(){
    this.pelicula.newMovie(this.peli).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
