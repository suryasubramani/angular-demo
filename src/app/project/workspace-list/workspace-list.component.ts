import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss'],
})
export class WorkspaceListComponent implements OnInit {
  Workspaces: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadAllWorkspace();
  }

  loadAllWorkspace() {
    let accountId = 1525728;
    let response = this.userService.getWorkspaceList(accountId);
    console.log(response);
    this.Workspaces = response.result;
  }
}
