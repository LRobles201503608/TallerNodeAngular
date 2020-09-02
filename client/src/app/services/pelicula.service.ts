import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private httpClient: HttpClient) { }

  newMovie(data:any){
    return this.httpClient.post('http://localhost:3000/movie/nueva',data);
  }
  addMovie(data:any){
    return this.httpClient.post('http://localhost:3000/movie/nueva',data);
  }
}
