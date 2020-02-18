import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChunckService } from '../chunck.service';

@Component({
  selector: 'app-chunck',
  templateUrl: './chunck.component.html',
  styleUrls: ['./chunck.component.css']
})
export class ChunckComponent implements OnInit {

  chunck: Observable<string>;
  chunckWithAuth: Observable<string>;


  constructor(private service: ChunckService) { }

  ngOnInit(): void {
    this.getJoke();
    this.getJokeWithAuth();
  }

    getJoke() {
      this.chunck = this.service.getChuckJoke();
    }

    getJokeWithAuth() {
     this.chunckWithAuth = this.service.getJokeWithAuth();
    }
}
