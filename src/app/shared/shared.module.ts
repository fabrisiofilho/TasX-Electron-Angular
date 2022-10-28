import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { OfficeComponent } from './office/office.component';
import { TagTasxComponent } from './tag-tasx/tag-tasx.component';
import { ProfileControllerComponent } from './profile-controller/profile-controller.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { KanbanComponent } from './kanban/kanban.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonTasXComponent } from './button-tas-x/button-tas-x.component';
import { ButtonIconTasXComponent } from './button-icon-tas-x/button-icon-tas-x.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarGroupsComponent } from './avatar-groups/avatar-groups.component';


@NgModule({
  declarations: [
    SideNavComponent,
    ProfileControllerComponent,
    TagTasxComponent,
    OfficeComponent,
    ClockComponent,
    KanbanComponent,
    KanbanColumnComponent,
    KanbanCardComponent,
    ButtonTasXComponent,
    ButtonIconTasXComponent,
    AvatarComponent,
    AvatarGroupsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DividerModule,
    DynamicDialogModule,
    TooltipModule,
    RouterModule,
    DragDropModule
  ],
  exports: [
    SideNavComponent,
    ProfileControllerComponent,
    TagTasxComponent,
    OfficeComponent,
    ClockComponent,
    KanbanComponent,
    ButtonTasXComponent,
    ButtonIconTasXComponent,
    AvatarGroupsComponent
  ]
})
export class SharedModule { }
