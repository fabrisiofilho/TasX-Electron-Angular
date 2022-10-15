import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { StandardComponent } from './standard/standard.component';
import { SystemModulesComponent } from './system-modules/system-modules.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    StandardComponent,
    SystemModulesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
