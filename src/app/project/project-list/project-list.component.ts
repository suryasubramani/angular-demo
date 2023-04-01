import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: any;
  workspaceId!: number;
  accountId!: number;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.workspaceId = params['workspaceId'];
      this.accountId = params['accountId'];
    });
    this.loadAllProjects();
  }

  loadAllProjects() {
    let response = this.userService.getWorkspaceProjects(this.workspaceId);
    console.log(response);
    this.projects = response.result;
  }

  gotoTestPage(projectId: string) {
    console.log(projectId);
    window.location.href =
      'accounts/' +
      this.accountId +
      '/workspaces/' +
      this.workspaceId +
      '/projects/' +
      projectId +
      '/tests';
  }
}
