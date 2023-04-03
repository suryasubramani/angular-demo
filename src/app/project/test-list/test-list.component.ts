import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
})
export class TestListComponent implements OnInit {
  tests: any;
  workspaceId!: number;
  projectId!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.workspaceId = params['workspaceId'];
      this.projectId = params['projectId'];
    });
    this.loadAllTests();
  }

  loadAllTests() {
    let response = this.userService.getProjectTestList(this.workspaceId);
    console.log(response);
    let allTest = response.result;
    this.tests = allTest.filter((obj) => obj.projectId == this.projectId);
  }
}
