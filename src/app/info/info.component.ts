import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public socialLinks = [];
  public mails = [];

  constructor() { }

  ngOnInit(): void {

    let socialLinks = {
      facebook: "https://www.facebook.com/iamsaket.verma",
      instagram: "https://www.instagram.com/saket.verma/",
      reddit: "https://www.reddit.com/user/phoenix_saket",
      twitter: "https://twitter.com/phoenix_saket",
      github: "https://github.com/phoenixSaket",
      linkedin: "https://www.linkedin.com/in/developer-saket-verma",
    };

    this.socialLinks = Object.entries(socialLinks);
    this.mails = [
      "develope.saket@gmail.com",
      "saket.verma@citiustech.com",
      "saket.verma@scrollright.com"
    ]

  }

  openLink(link: string) {
    window.open(link);
  }

}
