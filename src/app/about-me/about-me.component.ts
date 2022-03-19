import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  @Input() info = {
    experienceImage: "",
    aboutText: ""
  };

  constructor() {

  }

  ngOnInit(): void {
    console.log("About Me", this.info);
  }
}
