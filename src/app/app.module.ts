import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './user/user-routing.module';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
