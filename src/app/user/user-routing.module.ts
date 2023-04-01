import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users/home',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomepageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
