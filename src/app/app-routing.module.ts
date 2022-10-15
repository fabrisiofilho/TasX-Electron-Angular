import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule),
    canActivate: []
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule),
    canActivate: []
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
