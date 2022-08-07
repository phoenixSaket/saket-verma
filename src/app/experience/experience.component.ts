import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() experience: any[];

  constructor() { }

  ngOnInit(): void {
  }

  public getMonth(input): string {
    let month: string = "";
    switch (input) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "December";
        break;
      default:
        month = "Current";
        break;
    }
    return month;
  }

  public getDuration(start, end): string {
    start = JSON.parse(JSON.stringify(start));
    end = JSON.parse(JSON.stringify(end));
    let yearDiff = 0;
    let diff = 0;
    let string = "";

    if (end.year == 0) {
      end.month = new Date().getMonth() + 1;
      end.year = new Date().getFullYear()
    }

    if (end.year - start.year != 0) {
      yearDiff = (end.year - (start.year + 1)) * 12;
    } else {
      diff = end.month - start.month;
    }

    if (yearDiff == 0) {
      diff = diff + 1;
      string = "<b><u>" + (diff) + "</b></u>&nbsp;" + "months";
    } else {
      diff = yearDiff + (12 - start.month) + (end.month);
      if (diff > 12) {
        let year = Math.floor(diff / 12);
        let month: any = diff % 12;
        string = "<b><u>" + (year) + "</b></u>&nbsp;" + "year" + (year < 2 ? "" : "s") + ",&nbsp;" + "<b><u>" + (month) + "</b></u>&nbsp;month" + (month < 2 ? "" : "s");
      }
    }

    return string;
  }

}
