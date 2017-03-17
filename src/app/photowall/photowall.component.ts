import { Component } from '@angular/core';
import { PhotoWallService} from './photowall.service';
import { Picture } from './picture';

@Component({
  selector: 'photo-wall',
  template: `
  <div fxLayout="row" style="background-color: #EEEEEE;" fxLayoutWrap>
    <picture-card fxFlex="50" fxFlex.gt-sm="19vw" *ngFor="let picture of pictures" [picture]="picture"></picture-card>
  </div>
`,
  providers: [PhotoWallService]
})
export class PhotoWallComponent {
  pictures: Array<Picture>;
  constructor(private photoWallService: PhotoWallService) {
    this.pictures = this.photoWallService.getPictures();
  };
}
