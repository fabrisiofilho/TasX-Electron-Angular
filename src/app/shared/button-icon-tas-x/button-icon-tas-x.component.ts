import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button-icon-tas-x',
  templateUrl: './button-icon-tas-x.component.html',
  styleUrls: ['./button-icon-tas-x.component.css']
})
export class ButtonIconTasXComponent implements OnInit {

  @Input()
  icon?: any;

  @Input()
  isButton: boolean = false;

  sizeSm: SizeProp = "1x";

  constructor() { }

  ngOnInit(): void {
  }

}
