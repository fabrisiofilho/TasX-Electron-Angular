import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  @Input()
  office: string = 'Não informado';

  constructor() { }

  ngOnInit(): void {
  }

}
