import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { TestListComponent } from './test-list/test-list.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    TestListComponent,
    WorkspaceListComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
