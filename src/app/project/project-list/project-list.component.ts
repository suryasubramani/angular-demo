import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadAllProjects();
  }

  loadAllProjects() {
    let WorkspaceId = 1577842;
    let response = this.userService.getWorkspaceProjects(WorkspaceId);
    console.log(response);
    this.projects = response.result;
  }
}
