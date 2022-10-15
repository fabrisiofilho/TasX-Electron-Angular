import { Component, Input, OnInit } from '@angular/core';
import { CardKaban } from 'src/app/models/card-kanban';

@Component({
  selector: 'kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.css']
})
export class KanbanCardComponent implements OnInit {

  @Input()
  card: CardKaban = { id:0, content: "Untitled", name: "Untitled", tags:"Untitled" };

  constructor() { }

  ngOnInit(): void {
  }

}
