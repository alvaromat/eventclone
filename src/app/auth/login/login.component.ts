import {Component, OnDestroy} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnDestroy {

  authState = this.afAuth.authState;

  mailLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  leaveLoginOnUserLoginSubscription = this.authState.pipe(
    filter(user => user !== undefined),
    tap(user => this.router.navigate(['manage']))
  ).subscribe();

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async loginMail() {
    if (this.mailLoginForm.invalid) {
      this.mailLoginForm.markAllAsTouched();
      return;
    }

    const signInMethods = await this.afAuth.auth.fetchSignInMethodsForEmail(this.mailLoginForm.controls.email.value);
    const userExists = signInMethods.length > 0;
    const {email, password} = this.mailLoginForm.value;

    if (userExists) {
      if (signInMethods.includes('password')) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
      } else {
        this.loginGoogle();
      }
    } else {
      const {user} = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      user.sendEmailVerification();
    }
  }

  ngOnDestroy(): void {
    this.leaveLoginOnUserLoginSubscription.unsubscribe();
  }
}
