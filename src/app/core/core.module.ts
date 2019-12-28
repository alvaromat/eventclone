import { NgModule } from '@angular/core';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import {SharedModule} from '../shared/shared.module';
import {AuthModule} from '../auth/auth.module';



@NgModule({
  declarations: [AppToolbarComponent],
  imports: [
    SharedModule,
    AuthModule
  ],
  exports: [
    AppToolbarComponent
  ]
})
export class CoreModule { }
