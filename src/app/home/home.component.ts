import { UserService } from '../shared/services/user.service';
import { VKService } from '../shared/services/vk.service';
import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  groups: any;
  numberGroup: number;
  currentGroup: any;

  constructor(private vkService: VKService, private userService: UserService,
      private translateService: TranslateService) {
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
  }

  ngOnInit(): void {
    this.currentGroup = {};
    this.currentGroup.groups = [];
    this.vkService.getGroupsAdmin(this.userService.currentUser.id, (response) => {
      if (response.response.items.length !== 0) {
        const groupIdList = [];
        _.each(response.response.items, (group) => groupIdList.push(group.id));
        this.vkService.getGroupDetails(groupIdList, (responseGroup: any) => {
          this.numberGroup = responseGroup.response.length;
          this.groups = responseGroup.response;
          this.currentGroup = responseGroup.response[0];
        });
      }
    });
   }

   updateCurrentGroup(event) {
     this.currentGroup = event.currentGroup;
   }
}
