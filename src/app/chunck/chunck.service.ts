import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChunckService {


  constructor(private http: HttpClient) { }

  getChuckJoke(): Observable<string> {
    return this.http.get('http://localhost:3001/api/random-quote', {responseType: 'text'});
  }

  getJokeWithAuth(): Observable<string> {
    return this.http.get('http://localhost:3001/api/protected/random-quote', {responseType: 'text'});
  }
}
