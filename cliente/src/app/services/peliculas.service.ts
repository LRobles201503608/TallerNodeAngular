import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  url = 'http://192.168.1.15:3100/';
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
