import { UserService } from '../shared/services/user.service';
import { VKService } from '../shared/services/vk.service';
import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  groups: any;
  numberGroup: number;
  currentGroup: any;
  constructor(private vkService:VKService, private userService:UserService, private translateService: TranslateService){
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
  }
  ngOnInit(): void {
    this.vkService.getGroupsAdmin(this.userService.currentUser.id,(response)=>{
      let groupIdList = [];
      response.response.shift();
      _.each(response.response,(group)=>groupIdList.push(group.gid));
      this.vkService.getGroupDetails(groupIdList, (response)=>{
        this.numberGroup = response.response.length;
        this.groups = response.response;
        this.currentGroup =response.response[0];
      });
    });
   }
   updateCurrentGroup(event){
     this.currentGroup = event.currentGroup;
   }
}