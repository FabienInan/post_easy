import { UserService } from '../../shared/services/user.service';
import { VKService } from '../../shared/services/vk.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'my-vk-groups',
  templateUrl: './my-vk-groups.component.html',
  styleUrls: ['./my-vk-groups.component.css']
})
export class MyVkGroupsComponent {
  @Input()groups: any;
  @Output()onGroupChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  selectGroup(group: any) {
    this.onGroupChanged.emit({currentGroup: group});
  }
}
