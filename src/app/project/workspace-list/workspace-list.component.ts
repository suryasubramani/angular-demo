import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss'],
})
export class WorkspaceListComponent implements OnInit {
  workspaces: any;
  accountId!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.accountId = params['accountId'];
    });
    this.loadAllWorkspace();
  }

  loadAllWorkspace() {
    // let accountId = 1525728;
    let response = this.userService.getWorkspaceList(this.accountId);
    console.log(response);
    this.workspaces = response.result;
  }
}
