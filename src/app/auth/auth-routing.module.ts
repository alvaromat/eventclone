import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {redirectLoggedInToManage} from './auth.pipes';



@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToManage}}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
