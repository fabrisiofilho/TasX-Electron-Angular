import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tag-tasx',
  templateUrl: './tag-tasx.component.html',
  styleUrls: ['./tag-tasx.component.css']
})
export class TagTasxComponent implements OnInit {

  @Input()
  status: string = 'Não informado';

  @Input()
  padding: string = '2px 6px';

  @Input()
  marginLeft: string = '0px';

  @Input()
  fontSize: string = '10px';

  @Input()
  color: string = 'white';

  @Input()
  bColor: string = ' rgb(41, 41, 41)';

  constructor() { }

  ngOnInit(): void {
    this.alterColor();
  }

  alterColor() {

  }

}
