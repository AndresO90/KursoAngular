import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/first.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  messageToChild: string;
  messageFromChild: string;
  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
  }
onClick() {
  alert('Hola Mundo!');
  this.messageToChild = this.firstService.getMessage();
}
responseFromChild(event) {
  this.messageFromChild = event;
}
}
