import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { VKService } from '../shared/services/vk.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input()
  userName: string;
  photoURL: string;
  constructor(private userService: UserService, private vkService: VKService, private router: Router) {
    if (this.userService.currentUser) {
      this.userName = this.userService.currentUser.firstName;
      this.vkService.getProfilePicture(this.userService.currentUser.id, (response) =>
        this.photoURL = response.response[0].photo_50);
    }
  }

  logout() {
    this.vkService.logout((response) => {
      this.router.navigate(['']);
    });
  }
}
