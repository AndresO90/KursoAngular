import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { UserDTO } from './users-dto.model';
import { UsersProxyService } from './users-proxy.service';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private proxy: UsersProxyService) { }

  getUsers(): Observable<User[]> {
    return this.proxy.getUsers().pipe(
      map((usersDTO: UserDTO[]) => {
        let users: User[] = [];
        usersDTO.map((userDTO: UserDTO) => {
          const user: User = {
            city: userDTO.address.city,
            email: userDTO.email,
            name: userDTO.name,
            phone: userDTO.phone,
            username: userDTO.username
          };
          users = [...users, user];
        });
        return users;
      })
    );
  }
}
