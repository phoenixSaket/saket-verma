import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() education: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
