import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from './login-dto';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginDTO> {
    return this.http.post<LoginDTO>('http://localhost:3001/auth', {username, password});
  }
}
