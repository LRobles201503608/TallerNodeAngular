import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../../services/pelicula.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  variable:any=[];
  constructor(private peliculas:PeliculaService) { }

  ngOnInit() {
    this.mostrar();
  }

  mostrar(){
    this.peliculas.getMovies().subscribe(
      res=>{
        console.log(res);
        this.variable=res;
      },
      err=>{
        console.log(err);
      }
    );
  }
  delete(id:number){
    this.peliculas.delete(id).subscribe(
      res=>{
        console.log(res);
        this.mostrar();
      },
      err=>{
        console.log(err);
      }
    );
  }
}
