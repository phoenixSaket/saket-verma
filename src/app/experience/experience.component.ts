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
    { company: "PlexusMD", period: { start: { month: 1, year: 2020 }, end: { month: 6, year: 2020 } } },
    { company: "ScrollRight", period: { start: { month: 7, year: 2020 }, end: { month: 9, year: 2020 } } },
    { company: "CitiusTech", period: { start: { month: 10, year: 2020 }, end: { month: 0, year: 0 } } }
  ]

  public education = [
    { course: "MCA", period: { start: 2017, end: 2020 }, college: "Veermata Jijabai Technological Institue (VJTI)", city: "Mumbai" },
    { course: "BCA", period: { start: 2014, end: 2017 }, college: "G. H. Raisoni Institute for I.T.", city: "Nagpur" },
    { course: "HSC", period: { start: null, end: 2014 }, college: "Ushabai Deshmukh Jr. College", city: "Achalpur" },
    { course: "SSC", period: { start: null, end: 2012 }, college: "Fatima Convent High School", city: "Achalpur" },
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
