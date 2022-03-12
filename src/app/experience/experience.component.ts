import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {

  public tabs = [
    { tabName: "Intro", isActive: false },
    { tabName: "Experience", isActive: false },
    { tabName: "Education", isActive: false }
  ];

  public skills = [
    { skillName: "Angular", value: 75, max: 100 },
    { skillName: "React", value: 70, max: 100 },
    { skillName: "Java", value: 70, max: 100 },
    { skillName: "NodeJS", value: 70, max: 100 },
    { skillName: "SQLite", value: 70, max: 100 },
    { skillName: "MySQL", value: 75, max: 100 },
    { skillName: "HTML", value: 80, max: 100 },
    { skillName: "CSS", value: 85, max: 100 },
  ];

  public experience = [
    { company: "PlexusMD", year: {start: 2020, end: 2020} },
    { company: "ScrollRight", year: {start: 2020, end: 2020} },
    { company: "CitiusTech", year: {start: 2020, end: null} },
  ]

  leftSkills = [];
  rightSkills = [];

  contentHeight = 0;

  constructor() { }

  ngOnInit(): void {
    this.tabs.forEach(tab => {
      if (tab.tabName === "Intro") {
        tab.isActive = true;
      }
    })

    this.leftSkills = [];
    this.rightSkills = [];
    this.skills.forEach((skill, index) => {
      if (index % 2 == 0) {
        this.leftSkills.push(skill);
      } else {
        this.rightSkills.push(skill);
      }
    })

    setTimeout(() => {
      let content = document.getElementById("content-height");
      this.contentHeight = content.clientHeight;
    }, 100);

  }

  public setActiveTab(tab: string) {
    this.tabs.forEach(t => {
      if (t.tabName === tab) {
        t.isActive = true;
      } else {
        t.isActive = false;
      }
    });
  }

  public getCurrentTab(): string {
    let active = "Intro";
    this.tabs.forEach(tab => {
      if (tab.isActive) {
        active = tab.tabName;
      }
    })
    return active;
  }

}
