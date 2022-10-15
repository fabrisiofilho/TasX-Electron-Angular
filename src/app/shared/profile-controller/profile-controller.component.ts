import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGear, faPhone, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'profile',
  templateUrl: './profile-controller.component.html',
  styleUrls: ['./profile-controller.component.css']
})
export class ProfileControllerComponent implements OnInit {

  faComment = faInstagram;
  faGear = faGear;
  faPhone = faPhone;
  faX = faX;
  faEnvelope = faEnvelope;
  faGit = faGithub;
  sizeSm: SizeProp = "lg";
  sizeSm2: SizeProp = "1x";

  constructor() { }

  ngOnInit(): void {
  }

  closeSide() {

  }

}
