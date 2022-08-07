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
  public personalInfo: any = {};
  public aboutMeInfo: any = {};
  public experience: any[] = [];
  public education: any[] = [];
  public skills: any[] = [];

  ngOnInit() {
    let json = JSON.parse(JSON.stringify(info));
    this.jsonData = json?.default;
    console.log(this.jsonData);

    this.aboutMeInfo = this.jsonData.aboutMe.content;

    this.personalInfo = {
      name: this.jsonData.personalInfo.name,
      jobProfile: this.jsonData.personalInfo.jobProfile,
      image: this.jsonData.personalInfo.image,
      phone: this.jsonData.personalInfo.phone,
      email: this.jsonData.personalInfo.email,
      socialLinks: this.jsonData.personalInfo.socialLinks
    }

    let exp = this.jsonData.experience;

    exp.forEach(comp => {
      this.experience.push(comp);
    });

    let edu = this.jsonData.education;

    edu.forEach(ins => {
      this.education.push(ins);
    })

    let skills = this.jsonData.skills;

    skills.forEach(skill => {
      this.skills.push(skill);
    });

    console.log("Personal Info", this.personalInfo);
    console.log("About me\n\n", this.aboutMeInfo);
    console.log("Experience", this.experience);
    console.log("Education", this.education);
    console.log("Skills", this.skills);
  }
}
