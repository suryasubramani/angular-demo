import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
})
export class TestListComponent implements OnInit {
  tests: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadAllTests();
  }

  loadAllTests() {
    let WorkspaceId = 1577842;
    let response = this.userService.getProjectTestList(WorkspaceId);
    console.log(response);
    this.tests = response.result;
  }
}
