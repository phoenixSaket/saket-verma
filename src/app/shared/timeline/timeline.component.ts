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
    this.experience.push({ company: this.experience[this.experience.length - 1].company, year: { start: new Date().getFullYear() }});
  }

}
