import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);
    let response = this.userService.getuserDetails();
    let user = {
      email: response.result.email,
      firstName: response.result.firstName,
      lastName: response.result.lastName,
      userId: response.result.id,
      roles: response.result.roles,
      accountId: response.result.defaultProject.accountId,
      workspaceId: response.result.defaultProject.workspaceId,
      projectId: response.result.defaultProjectId,
    };
    console.log(user);
    localStorage.setItem('LOGGEDIN USER', JSON.stringify(user));
    alert('Logged In Successfully');
    window.location.href = 'accounts/' + user.accountId + '/workspaces';
  }
}
