import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() name: string = "progress";
  @Input() value: number = 0;
  @Input() maxValue: number = 100;

  public position: number = 0;
  public width: number = 0;

  constructor() { }

  ngOnInit(): void {
    let progress = document.getElementById("progress");
    this.width = progress.clientWidth;

    this.position = ((this.value / 100) * progress.clientWidth);
    if (this.value != 0) {
      this.position = this.position - 3;
    }
  }

}
