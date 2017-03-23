import { Component } from '@angular/core';
import { PhotoWallService } from './photowall.service';
import { Picture } from './picture';

@Component({
  selector: 'photo-wall',
  template: `
  <div fxFlexFill fxLayout="column">
    <div fxLayout="row" fxLayoutWrap style="padding-left:10px;padding-top:5px">
      <a href="#" class="sort-link" style="color:grey!important">Viewed</a>
      <a href="#" class="sort-link" style="color:bluegrey!important">Liked</a>
      <a href="#" class="sort-link" style="color:grey!important">Recent</a>                    
    </div>
    <div fxFlex fxLayout="row" fxLayoutWrap style="overflow:auto;">
      <picture-card-v2 fxFlex="100vw" fxFlex.gt-sm="19.6vw" *ngFor="let picture of pictures" [picture]="picture"></picture-card-v2>
    </div>
  </div>
  `,
  styles: [`
    photo-wall{
      display: block;
    }
    .sort-link {
      text-decoration: none;
      padding-right:20px;
    }
  `],
  providers: [PhotoWallService]
})
export class PhotoWallComponent {
  pictures: Array<Picture>;
  constructor(private photoWallService: PhotoWallService) {
    this.pictures = this.photoWallService.getPictures();
  };
}
