import { Component } from '@angular/core';
import { PhotoWallService } from './photowall.service';
import { Picture } from './picture';

@Component({
  selector: 'photo-wall',
  templateUrl: './photowall.component.html',
  styleUrls: ['./photowall.component.css'],
  providers: [PhotoWallService]
})
export class PhotoWallComponent {
  pictures: Array<Picture>;
  constructor(private photoWallService: PhotoWallService) {
    this.pictures = this.photoWallService.getPictures();
  };
}
