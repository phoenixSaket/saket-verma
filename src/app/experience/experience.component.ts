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

  constructor() { }

  ngOnInit(): void {
    this.tabs.forEach(tab=> {
      if(tab.tabName === "Intro"){
        tab.isActive = true;
      }
    })
  }

  public setActiveTab(tab: string) {
    this.tabs.forEach(t => {
      if(t.tabName === tab) {
        t.isActive = true;
      } else {
        t.isActive = false;
      }
    });
  }

  public getCurrentTab():string {
    let active = "Intro";
    this.tabs.forEach(tab=> {
      if(tab.isActive) {
        active = tab.tabName;
      }
    })
    return active;
  }

}
