import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private secondService: SecondService) { }

  getMessage(): string {
    return 'Ordena la habitacion desde el servicio. ' + this.secondService.getMessage();
  }
}
