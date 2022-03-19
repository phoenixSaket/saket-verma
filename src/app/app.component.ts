import { Component } from '@angular/core';
import * as info from "../info.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saket-verma';
  private jsonData: any = {};
  public info: any = {
    name: "",
    jobProfile: "",
    image: ""
  };
  public aboutMeInfo: { experienceImage: any; aboutText: any; };

  ngOnInit() {
    let json = JSON.parse(JSON.stringify(info));
    this.jsonData = json?.default; 
    console.log(this.jsonData);

    this.aboutMeInfo = {
      experienceImage: this.jsonData.experienceImage,
      aboutText: this.jsonData.aboutText
    }

    this.info = {
      name: this.jsonData.name,
      jobProfile: this.jsonData.jobProfile,
      image: this.jsonData.image
    }
  }
}
