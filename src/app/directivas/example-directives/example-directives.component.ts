import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directives',
  templateUrl: './example-directives.component.html',
  styleUrls: ['./example-directives.component.css']
})
export class ExampleDirectivesComponent implements OnInit {
  colors: string[] = [];
  show: boolean;
  constructor() { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'green', 'orange', 'pink'];
    this.show = true;
  }

}
