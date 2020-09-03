import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.page.html',
  styleUrls: ['./lista-peliculas.page.scss'],
})
export class ListaPeliculasPage implements OnInit {
  variable:any=['hola','mundo'];
  variable2:any=[];
  constructor(private pelicula:PeliculasService) { }

  ngOnInit() {
    this.mostrar();
  }

  mostrar(){
    this.pelicula.getMovies().subscribe(
      res=>{
        this.variable2=res;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }
  delete(id:number){
    this.pelicula.delete(id).subscribe(
      res=>{
        this.mostrar();
      },
      err=>{
        console.log(err);
      }
    );
  }
}
