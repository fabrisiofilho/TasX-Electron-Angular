import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { CardKaban } from 'src/app/models/card-kanban';

@Component({
  selector: 'kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.css']
})
export class KanbanCardComponent implements OnInit {

  @Input()
  card: CardKaban = { id:0, content: "Untitled", name: "Untitled", tags:"Untitled" };

  faPencil = faEllipsisVertical;

  constructor() { }

  ngOnInit(): void {
  }

}
