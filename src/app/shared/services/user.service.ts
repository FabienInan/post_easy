import { User } from '../models/user.model';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class UserService {
  public userObservable: AngularFireObject<any>;
  public currentUser: User;

  constructor(public af: AngularFireDatabase) {}

  getUser() {
    return new Promise( (resolve) => {
      this.currentUser = JSON.parse(localStorage.getItem('currentUserPostEasy'));
      const id = this.currentUser ? this.currentUser.id : '';
        this.userObservable = this.af.object(`users/${id}`);
        this.userObservable.valueChanges().subscribe((userDb) => {
            this.currentUser = new User(userDb.name, userDb.firstName, userDb.id, userDb.groups);
            resolve();
        });
    });
  }

  saveUser(settings: boolean) {
    const id = this.currentUser.id;
    this.userObservable = this.af.object(`users/${id}`);
    const subscription = this.userObservable.valueChanges().subscribe((userDb) => {
      if (!userDb.$exists() || settings) {
        this.userObservable.set(this.currentUser);
        if (subscription) {
          subscription.unsubscribe();
        }
      }
    });
    localStorage.setItem('currentUserPostEasy',
    JSON.stringify({firstName: this.currentUser.firstName, name: this.currentUser.name, id: this.currentUser.id}));
  }

}
