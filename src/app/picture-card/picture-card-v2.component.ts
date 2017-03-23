import { Component, Inject, Input } from '@angular/core';

import { Picture } from '../photowall/picture';

@Component({
  selector: 'picture-card-v2',
  template: `
  <md-card class="card">
    <div md-card-image fxLayout="row" class="center-cropped" [ngStyle]="{'background-image': 'url(' + picture.url + ')'}">
    </div>
    <md-card-content class="hide-mobile card-content-picture">
    <div fxLayout="row" >
      <div fxLayout="column" fxFlex="60">
        <div fxLayout="row" class="picture-category">{{picture.category}}</div>
        <div fxLayout="row" class="picture-place" fxFlex>{{picture.province}}, {{picture.country}}</div>  
      </div>      
      <div fxLayout="column" fxFlex="40">
        <div fxLayout="row" fxLayoutAlign="end start">3 days ago</div> 
        <div fxLayout="row" fxLayoutAlign="end start" style="padding-top:5px;">
          <button md-icon-button style="margin-top:-6px">
            <md-icon style="font-size: 18px; color: orange">thumb_up</md-icon>
          </button>
          <span class="md-primary" style="margin-top:9px">9899</span>
          <button md-icon-button style="margin-top:-6px">
            <md-icon style="font-size: 18px; color: orange">share</md-icon>
          </button>
          <span class="md-primary" style="margin-top:9px">2503</span>  
        </div>
      </div>  
    </div>
    </md-card-content>
  </md-card>
`,
  styleUrls: ['./picture-card-v2.component.scss']
})
export class PictureCardV2Component {
  @Input()
  picture: Picture;
}
