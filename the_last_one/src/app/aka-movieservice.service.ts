import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AkaMovieserviceService {
  url = 'http://localhost:4000'

  constructor(public http:HttpClient) { }
  getMovies(
    page:Number,
    size:Number,
  ): Observable <any>{
    return this.http.get<any>(`${this.url}/movies/?page=${page}&size=${size}`);
  }
  getLength():Observable<any>{
    return this.http.get(`${this.url}/length`)
      
    
  }
  getMovieById (id:Number):Observable <any>{
    return this.http.get(`${this.url}/movie/${id}`);

  }
  getVideo(id:Number):Observable<any>{
    return this.http.get(`${this.url}/video/${id}`);
  }
  
}
