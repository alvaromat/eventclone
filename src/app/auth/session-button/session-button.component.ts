import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-session-button',
  templateUrl: './session-button.component.html',
  styleUrls: ['./session-button.component.sass']
})
export class SessionButtonComponent {

  icon$ = this.afAuth.authState.pipe(
    map(user => user ? 'logout' : 'login'  )
  );

  tooltip$ = this.afAuth.authState.pipe(
    map(user => user ? 'Cerrar sesión' : 'Identificate')
  );

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  loginOrDisconnect() {
    const subscription = this.afAuth.authState.subscribe(async user => {
      if (user) {
        await this.afAuth.auth.signOut();
      }
      this.router.navigate(['login']);
      subscription.unsubscribe();
    });
  }
}
