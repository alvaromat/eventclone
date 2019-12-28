import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularFireAuthGuard, canActivate} from '@angular/fire/auth-guard';
import {redirectUnauthorizedToLogin} from './auth/auth.pipes';


const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {path: '', redirectTo: 'manage', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
