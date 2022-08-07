import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutMeComponent implements OnInit {
  @Input() content: string;
  constructor() { }
  ngOnInit(): void {
  }

}
