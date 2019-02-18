import { VKService } from '../../shared/services/vk.service';
import { SettingsGroup } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { Component, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'admin-group',
  templateUrl: './admin-group.component.html'
})
export class AdminGroupComponent implements OnChanges{
    @Input() currentGroup: any;
    disabledSelect = false;
    newTopic: string;
    suggestedTopicList: Array<string> = new Array<string>();
    filteredSuggestedTopicList: Array<string> = new Array<string>();
    error: string;
    settingsGroup: SettingsGroup;
    indexGroup = -1;
    suggestedPosts: any;
    suggestedPostsLoading = false;
    constructor(public userService: UserService, public vkService: VKService){
      this.suggestedTopicList = ['Humor', 'Finance', 'Hand spinner'];
      this.filteredSuggestedTopicList = this.suggestedTopicList;
      this.newTopic = '';
      userService.getUser().then(() => this.createOrUpdateGroup());
    }

    ngOnChanges(changes) {
      if (changes.currentGroup.currentValue) {
        this.createOrUpdateGroup();
      }
    }

    createOrUpdateGroup() {
      if (this.userService.currentUser.groups) {
          this.indexGroup = _.findIndex(this.userService.currentUser.groups,
            group => group.idGroup === this.currentGroup.gid);
      }
      if (this.indexGroup !== -1) {
          this.settingsGroup = this.userService.currentUser.groups[this.indexGroup];
      } else {
          this.settingsGroup = new SettingsGroup();
          this.settingsGroup.idGroup = this.currentGroup.gid;
      }
    }

    emptySelectValue() {
        this.settingsGroup.publicationFrequency = null;
    }

    emptyCustomValue() {
        this.settingsGroup.publicationFrequencyCustom = null;
    }

    addTopic() {
      if (this.newTopic) {
        if (!this.settingsGroup.topicList) {
          this.settingsGroup.topicList = [];
        }
        if (!_.includes(this.settingsGroup.topicList, this.newTopic)) {
          this.settingsGroup.topicList.push(this.newTopic);
          this.newTopic = null;
          this.filteredSuggestedTopicList = this.suggestedTopicList;
          this.error = null;
        } else {
          this.error = 'This topic already exist';
        }
      }
    }

    removeTopic(topic) {
      this.settingsGroup.topicList = _.remove(this.settingsGroup.topicList, function(o) {
        return o !== topic;
      });
    }

    filterSuggestedTopicList() {
      this.filteredSuggestedTopicList = _.filter(this.suggestedTopicList, (topic) => {
          return new RegExp(this.newTopic, 'gi').test(topic);
      });
    }

    saveSettings() {
      if (this.indexGroup !== -1) {
        this.userService.currentUser.groups[this.indexGroup] = this.settingsGroup;
      } else {
        this.userService.currentUser.groups.push(this.settingsGroup);
      }
      this.userService.saveUser(true);
    }

    onLinkClick($event: any) {
      if ($event.index === 1) {
        this.getBestPosts();
      }
    }

    getBestPosts() {
      if (this.settingsGroup.topicList) {
        this.suggestedPostsLoading = true;
        this.vkService.getBestPosts(this.settingsGroup.topicList[0]).then((postList) => {
          this.suggestedPosts = _.sortBy(<Array<any>>postList, [(post) => post.likes.count]).reverse();
          if (this.suggestedPosts.length > 20) {
            this.suggestedPosts = this.suggestedPosts.slice(0, 19);
          }
        this.suggestedPostsLoading = false;
        });
      }
    }
}