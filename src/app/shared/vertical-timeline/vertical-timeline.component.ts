import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.css']
})
export class VerticalTimelineComponent implements OnInit {

  @Input() education: any[];

  public left = [];
  public right = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.education);
    this.education.forEach((ed, index) => {
      if (index % 2 == 0) {
        this.left.push({ ...ed, type: 'left' });
        this.right.push({ type: 'blank' });
      } else {
        this.right.push({ ...ed, type: 'left' });
        this.left.push({ type: 'blank' });
      }
    })

    console.log("Left : ", this.left);
    console.log("Right : ", this.right);
  }

}
