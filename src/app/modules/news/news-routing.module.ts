import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StandardComponent } from './standard/standard.component';
import { SystemModulesComponent } from './system-modules/system-modules.component';

const routes: Routes = [
  {
    path:'',
    component: StandardComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'modules',
    component: SystemModulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
