import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faPencil, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { CardKaban } from 'src/app/models/card-kanban';
import { ColumnKanban } from 'src/app/models/column-kanban';

@Component({
  selector: 'kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.css']
})
export class KanbanColumnComponent implements OnInit {

  @Input()
  column!: ColumnKanban;

  @Output()
  removeColumnKanban = new EventEmitter<ColumnKanban>();

  faX = faX;
  faPlus = faPlus;
  sizeSm: SizeProp = "lg";

  @Input()
  listCard: CardKaban[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createTask() {
    this.listCard.unshift({id: this.listCard.length + 1, content:'Write here your annotations' + (this.listCard.length + 1), name:'Untitled', tags:'Java'});
  }

  addTask(card: CardKaban) {
    this.listCard.push(card);
  }

  removeTask(card: CardKaban) {
    this.listCard.splice(this.listCard.indexOf(card), 1);
  }

  dragEntered(event: CdkDragEnter<CardKaban>) {
  }

  dragMoved(event: CdkDragMove<CardKaban>) {

  }

  dragDropped(event: CdkDragDrop<CardKaban>) {
    const card: CardKaban = event.item.data;
  }

  alterTitleColumn(event: any) {

  }

  removeColumn() {
    this.removeColumnKanban.emit(this.column)
  }

}
