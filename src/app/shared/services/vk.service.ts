import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class VKService {
    vk: any;
    isLogin: false;
    constructor(){
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
        let paramsFields = 'photo_50';
        return this.vk.Api.call('users.get', {user_ids: id, fields: paramsFields}, callback);
    }

    getGroupsAdmin(userId, callback) {
        return this.vk.Api.call('groups.get', {user_id: userId, extended:1, filter:['admin', 'editor', 'moder']}, callback);
    }

    getGroupDetails(groupIdList, callback) {
        return this.vk.Api.call('groups.getById', {group_ids: groupIdList, fields: ['description']}, callback);
    }

    getBestPosts(search) {
        let postList = [];
        return new Promise( (resolve, reject)=> { 
            this.vk.Api.call('groups.search', {q:search, sort: 0, count:10}, (responseGroups)=>{
                responseGroups.response.shift();
                let promiseArray = new Array<Promise<any>>();
                _.each(responseGroups.response, (item)=>{
                    let promise = new Promise( (resolve, reject)=> {  
                        this.vk.Api.call('wall.get', {owner_id:-item.gid, count:50},(responsePosts)=>{
                            if(responsePosts.response){
                                responsePosts.response.shift();
                                _.each(responsePosts.response, (item)=>{
                                        postList.push(item);
                                });
                            }
                            resolve();
                        }); 
                    });
                    promiseArray.push(promise);        
                });
                Promise.all(promiseArray).then(()=> {
                    //sort by date then by likes
                    resolve(postList);
                });
            });
        });
    }
}