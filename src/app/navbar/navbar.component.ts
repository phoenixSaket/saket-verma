import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let x = Array.from(document.getElementsByClassName('element'));

    x.forEach( (el,index) => {
      el.addEventListener('mouseover', ()=> {
        el.classList.remove("hover-out");
        el.classList.add("hover-in");
      })
      el.addEventListener('mouseout', ()=> {
        el.classList.remove("hover-in");  
        el.classList.add("hover-out");  
      })
    })
  }

}
