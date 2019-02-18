import {Injectable} from "@angular/core";
import { VKService } from '../../shared/services/vk.service';

@Injectable()
export class CronGetPosts {
  constructor(public vkService: VKService) {}

 
}