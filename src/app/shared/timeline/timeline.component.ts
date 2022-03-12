import { Component, Input, OnInit } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() experience = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
