import { AdminAuthGuard } from './admin-auth-guard.service';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { ManageComponent } from './manage/manage.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ManageComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'manage',
        component: ManageComponent,
        canActivate: [AuthGuard, AdminAuthGuard] }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
