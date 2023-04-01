import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { TestListComponent } from './test-list/test-list.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent,
  },
  {
    path: 'accounts/:accountId/workspaces/:workspaceId/projects',
    component: ProjectListComponent,
  },
  {
    path: 'accounts/:accountId/workspaces/:workspaceId/projects/:projectId/tests',
    component: TestListComponent,
  },
  {
    path: 'workspaceList',
    component: WorkspaceListComponent,
  },
  {
    path: 'accounts/:accountId/workspaces',
    component: WorkspaceListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
