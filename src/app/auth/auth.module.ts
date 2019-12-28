import { NgModule } from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {SharedModule} from '../shared/shared.module';
import { SessionButtonComponent } from './session-button/session-button.component';



@NgModule({
  declarations: [LoginComponent, SessionButtonComponent],
  imports: [
    AngularFireAuthModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers: [AngularFireAuthGuard],
  exports: [SessionButtonComponent]
})
export class AuthModule { }
