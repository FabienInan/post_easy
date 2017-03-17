import { Component, Input, Inject } from '@angular/core';
import { Picture } from '../photowall/picture';

@Component({
  selector: 'picture-card',
  template: `
  <md-card class="card">
    <div md-card-image class="center-cropped" [ngStyle]="{'background-image': 'url(' + picture.url + ')'}"></div>
    <md-card-content class="hide-mobile">
      <p>
        Storechain: {{picture.storechain}}
      </p>
      <p>
        Country: {{picture.country}}
      </p>
      <p>
        Province: {{picture.province}}
      </p>
    </md-card-content>
    <md-card-actions class="hide-mobile">
    <button md-mini-fab><md-icon>thumb_up</md-icon></button>
    <button md-mini-fab><md-icon>share</md-icon></button>
    </md-card-actions>
  </md-card>
`,
  styles: [`
  .center-cropped {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .center-cropped:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .card {
    margin: 16px;
  }
  @media only screen and (max-width: 800px) {
    .hide-mobile {
      display: none;
    }
    .card {
      height: 125px;
    }
  }
`]
})
export class PictureCardComponent {
  @Input()
  picture: Picture;
}
