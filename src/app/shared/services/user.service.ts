import { User } from '../models/user.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  userObservable: Observable<any>;
  public currentUser: User;

  constructor(private db: AngularFireDatabase) {}

  getUser() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUserPostEasy'));
      const id = this.currentUser ? this.currentUser.id : '';
      this.db.object(`users/${id}`).valueChanges().toPromise().then((user: User) => this.currentUser = user);
  }

  saveUser() {
    const id = this.currentUser.id;
    this.db.object(`users/${id}`).set(this.currentUser);
    localStorage.setItem('currentUserPostEasy',
      JSON.stringify({firstName: this.currentUser.firstName, name: this.currentUser.name, id: this.currentUser.id}));
  }

}
