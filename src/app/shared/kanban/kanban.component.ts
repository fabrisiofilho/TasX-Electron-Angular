import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CardKaban } from 'src/app/models/card-kanban';
import { ColumnKanban } from 'src/app/models/column-kanban';

@Component({
  selector: 'kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  faPlus = faPlus;
  sizeSm: SizeProp = "lg";

  columnList: ColumnKanban[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createColumn() {
    this.columnList.push({id: this.columnList.length + 1, title: 'Untitled'});
  }

  drop(event: CdkDragDrop<CardKaban[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  removeColumnKanban(column: ColumnKanban) {
    console.log(column);
    this.columnList.splice(this.columnList.indexOf(column), 1);
  }
}
