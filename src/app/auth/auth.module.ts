import { NgModule } from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    AngularFireAuthModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers: [AngularFireAuthGuard]
})
export class AuthModule { }
