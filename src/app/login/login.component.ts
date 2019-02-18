import { VKService } from '../shared/services/vk.service';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(public userService: UserService, public vkService: VKService, private router: Router) {}

  loginVKAccount() {
    this.vkService.login((response)=> {
      let firstName = response.session.user.first_name;
      let lastName = response.session.user.last_name;
      let user = new User(lastName, firstName,response.session.user.id, null);
      this.userService.currentUser = user;
      this.userService.saveUser(false);
      this.router.navigate(['home']);
    });
  }
}