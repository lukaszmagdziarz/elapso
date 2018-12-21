import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  returnUrl: string;
  token: string;
  errorCode: string;

  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.errorCode = '';
  }

  signupUser(email: string, password: string) {
    this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(value => console.log('Successful signup!'))
    .catch(
        error => console.log(error.message)
      );
  }

  // signupUser(email: string, password: string) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .catch(
  //       error => console.log(error)
  //     );
  // }

  signinUser(email: string, password: string) {
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.firebaseAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                this.errorCode = '';
                this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigateByUrl(this.returnUrl);
              }
            );
        }
      )
      .catch(
        (error) => {
          // console.log(error.code);
          this.errorCode = error.message;
        }
      );
  }


  // signinUser(email: string, password: string) {
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(
  //       (response) => {
  //         firebase.auth().currentUser.getIdToken()
  //           .then(
  //             (token: string) => {
  //               this.token = token;
  //               this.errorCode = '';
  //               this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //               this.router.navigateByUrl(this.returnUrl);
  //             }
  //           );
  //       }
  //     )
  //     .catch(
  //       (error) => {
  //         // console.log(error.code);
  //         this.errorCode = error.message;
  //       }
  //     );
  // }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
     .then(
       (token: string) => this.token = token
     );
     return this.token;
  }

  getLastErrorCode() {
    return this.errorCode;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
