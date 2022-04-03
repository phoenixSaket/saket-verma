import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() experience = [];
  timelineData: any = [];
  colors: any = [
    "#368c7a",
    "#be2b37",
    "#30539c",
    "#604D53",
    "#FFD166",
  ];
  public separateData: {};

  constructor() { }

  ngOnInit(): void {
    this.getDuration();
    this.setData();
    this.getSplitWidth();

    setTimeout(() => {
      let x = Array.from(document.getElementsByClassName("container") as HTMLCollectionOf<HTMLElement>);
      let company = Array.from(document.getElementsByClassName("company") as HTMLCollectionOf<HTMLElement>);
      let year = Array.from(document.getElementsByClassName("year") as HTMLCollectionOf<HTMLElement>);

      x.forEach(el => {
        Array.from(el.children).forEach((child) => {
          if (!child.classList.contains("company-start")) {
            child.remove();
          }
        })
      })

      let top = 40;
      company.forEach((el, index) => {
        if(index % 2 != 0) {
          top += 25;
        } else {
          top = 40;
        }
        el.style.top = top + "px";
      })

    }, 100);
  }

  private getDuration() {
    let duration = 0;

    this.experience.forEach(comp => {
      let startMonth = comp.period.start.month - 1;
      let startYear = comp.period.start.year;

      let endMonth = comp.period.end.month;
      let endYear = comp.period.end.year;

      if (endMonth == 0 && endYear == 0) {
        let date = new Date();
        endMonth = date.getMonth() + 1;
        endYear = date.getFullYear();
      }

      duration = 0;

      if (startYear == endYear) {
        duration = endMonth - startMonth;
      }

      if (startYear < endYear) {
        let diffYear = endYear - startYear;
        let months = diffYear * 12;
        months = months - startMonth + endMonth;
        duration = months;
      }

      comp.period.duration = duration;
    })
  }

  private setData() {
    this.timelineData = [];
    let colorIndex = 1;

    this.experience.forEach((comp) => {
      let dur = comp.period.duration;
      for (let i = 0; i < dur; i++) {
        if (i == 0) {
          this.timelineData.push({ company: comp.company, color: 'color-' + colorIndex, type: "start", text: '' + this.getMonth(comp.period.start.month) + ", " + comp.period.start.year + " - " + this.getMonth(comp.period.end.month) + ", " + (comp.period.end.year != 0 ? comp.period.end.year : new Date().getFullYear()) });
        } else if (i == dur - 1) {
          this.timelineData.push({ company: comp.company, color: 'color-' + colorIndex, type: "end", text: '' + this.getMonth(comp.period.end.month) + ", " + (comp.period.end.year != 0 ? comp.period.end.year : new Date().getFullYear()) });
        } else {
          this.timelineData.push({ company: comp.company, color: 'color-' + colorIndex, type: "between" });
        }
      }
      if (colorIndex < 3) {
        colorIndex += 1;
      } else {
        colorIndex = 1;
      }
    })
  }

  private getMonth(month: number) {
    let monthInText = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = month - 1;
    return monthInText[month] != undefined ? monthInText[month] : "Current";
  }

  private getSplitWidth() {
    let timelineWidth = document.getElementsByClassName("timeline-main")[0].clientWidth;

    let change = true;
    let dataSplit = {};
    let len = 0

    this.timelineData.forEach((data, index) => {
      let comp = data.company;
      if (index > 1 ? comp != this.timelineData[index - 1].company : false) {
        change = true;
      } else {
        change = false;
      }

      if (change) {
        len = 1;
      } else {
        len += 1;
        dataSplit[data.company] = len;
      }

    })
    let durations: string[] = Object.values(dataSplit);
    let companies: string[] = Object.keys(dataSplit);
    let totalDuration: number = 0;

    durations.forEach(dur => {
      totalDuration += parseInt(dur);
    })

    companies.forEach((comp, index) => {
      dataSplit[comp] = { ...dataSplit[comp], width: ((parseInt(durations[index]) / totalDuration) * timelineWidth), index: index };
    })

    this.separateData = dataSplit;
  }

}
