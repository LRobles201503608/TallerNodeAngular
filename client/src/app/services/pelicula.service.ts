import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  url = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get(this.url+'movie/peliculas');
  }
  delete(id:number){
    var a={
      id:id
    }
    return this.httpClient.post(this.url+'movie/quitar',a);
  }
  newMovie(data:any){
    return this.httpClient.post(this.url+'movie/nueva',data);
  }
}
