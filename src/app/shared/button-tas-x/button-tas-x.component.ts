import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-tas-x',
  templateUrl: './button-tas-x.component.html',
  styleUrls: ['./button-tas-x.component.css']
})
export class ButtonTasXComponent implements OnInit {

  @Input()
  label: string = 'Não informado';

  constructor() { }

  ngOnInit(): void {
  }

}
