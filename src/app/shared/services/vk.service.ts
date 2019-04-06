import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class VKService {
    vk: any;
    isLogin: false;
    constructor() {
        const myWindow: any = window;
        this.vk = myWindow.VK;
    }

    login(callback) {
        return this.vk.Auth.login(callback);
    }

    logout(callback) {
        return this.vk.Auth.logout(callback);
    }

    getLoginStatus(callback) {
        return this.vk.Auth.getLoginStatus(callback);
    }

    getProfilePicture(id, callback) {
        const paramsFields = 'photo_50';
        return this.vk.Api.call('users.get', {user_ids: id, fields: paramsFields, v: '5.92'}, callback);
    }

    getGroupsAdmin(userId, callback) {
        return this.vk.Api.call('groups.get', {user_id: userId, extended: 1, filter: ['admin', 'editor', 'moder'], v: '5.92'}, callback);
    }

    getGroupDetails(groupIdList, callback) {
        return this.vk.Api.call('groups.getById', {group_ids: groupIdList, fields: ['description'], v: '5.92'}, callback);
    }

    getBestPosts(search) {
        const postList = [];
        return new Promise( (resolve) => {
            this.vk.Api.call('groups.search', {q: search, sort: 0, count: 10, v: '5.92'}, (responseGroups) => {
                const promiseArray = new Array<Promise<any>>();
                _.each(responseGroups.response.items, (item) => {
                    const promise = new Promise((resolve) => {
                        this.vk.Api.call('wall.get', {owner_id: -item.id, count: 50, v: '5.92'}, (responsePosts) => {
                            if (responsePosts.response) {
                                _.each(responsePosts.response.items, (item) => {
                                        postList.push(item);
                                });
                            }
                            resolve();
                        });
                    });
                    promiseArray.push(promise);
                });
                Promise.all(promiseArray).then(() => {
                    //sort by date then by likes
                    resolve(postList);
                });
            });
        });
    }
}