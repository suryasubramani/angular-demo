import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { TestListComponent } from './test-list/test-list.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'projects',
        component: ProjectListComponent,
      },
      {
        path: 'tests',
        component: TestListComponent,
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
        path: 'workspacelist',
        component: WorkspaceListComponent,
      },
      {
        path: 'accounts/:accountId/workspaces',
        component: WorkspaceListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
