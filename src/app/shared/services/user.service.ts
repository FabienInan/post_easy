import { User } from '../models/user.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import {Injectable} from "@angular/core";
import {AngularFire} from 'angularfire2';
import * as _ from 'lodash';

@Injectable()
export class UserService {
  public userObservable: FirebaseObjectObservable<any>;
  public currentUser: User;
  
  constructor(public af: AngularFire) {}

  getUser(){
    return new Promise( (resolve, reject)=> {  
      this.currentUser = JSON.parse(localStorage.getItem('currentUserPostEasy'));
      let id = this.currentUser ? this.currentUser.id : '';       
        this.userObservable = this.af.database.object(`users/${id}`); 
        this.userObservable.subscribe((userDb)=>{
            this.currentUser = new User(userDb.name, userDb.firstName, userDb.id, userDb.groups);
            resolve();
        }); 
    });
  }

  saveUser(settings: boolean) {
    let exist = false;
    const id = this.currentUser.id;
    this.userObservable = this.af.database.object(`users/${id}`);   
    let subscription = this.userObservable.subscribe((userDb)=>{
      if(!userDb.$exists() || settings){
        this.userObservable.set(this.currentUser); 
        if(subscription){
          subscription.unsubscribe();
        }
      }
    });
    localStorage.setItem('currentUserPostEasy', 
    JSON.stringify({firstName: this.currentUser.firstName, name: this.currentUser.name, id: this.currentUser.id}));
  }
 
}