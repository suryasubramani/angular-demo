import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { TestListComponent } from './test-list/test-list.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';

const routes: Routes = [
  {
    path: 'projectList',
    component: ProjectListComponent,
  },
  {
    path: 'testList',
    component: TestListComponent,
  },
  {
    path: 'workspaceList',
    component: WorkspaceListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
