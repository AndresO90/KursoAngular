import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) {
       alert('No token, no party');
     }
    return !!token;
  }
  getToken() {
    const token = sessionStorage.getItem('token');
    console.log('token desde auth.service: ', token);
    return token;
  }
  constructor(router: Router) { }
}
