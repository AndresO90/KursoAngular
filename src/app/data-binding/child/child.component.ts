import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
id: string;
param: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  @Input() message: string;
  @Output() reply = new EventEmitter;
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log('ENTRA');
    this.reply.emit('Me has dicho:' + this.message);
    console.log('CHANGES', changes);
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.param = this.activatedRoute.snapshot.queryParams.param;
    // this.param = this.activatedRoute.queryParams.subscribe((queryParams) => {
    //   console.log('quert', queryParams);
    //   this.param = queryParams.param;
    // });
  }
  // onReply() {
  //   this.reply.emit('Me has dicho:' + this.message);
  // }
  // allowExit() {

  // }
}
