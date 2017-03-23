import { Component, Inject, Input } from '@angular/core';

import { Picture } from '../photowall/picture';

@Component({
  selector: 'picture-card',
  template: `
  <md-card class="card">
    <div md-card-image fxLayout="row" class="center-cropped" [ngStyle]="{'background-image': 'url(' + picture.url + ')'}">
    <div class="date-picture"><span>3 days</span></div>
    </div>
    <md-card-content class="hide-mobile card-content-picture">
      <md-chip-list class="chip-data-picture">
        <md-chip class="chip-data-picture" selected="true"><span>{{picture.country}}</span></md-chip>
        <md-chip class="chip-data-picture" selected="true"><span>{{picture.category}}</span></md-chip>
        <md-chip class="chip-data-picture" selected="true"><span>{{picture.province}}</span></md-chip>
      </md-chip-list>
    </md-card-content>
    <md-card-actions class="hide-mobile" style="text-align: right;">
    <button md-mini-fab><md-icon>thumb_up</md-icon></button>
    <span class="md-primary">9899</span>
    <button md-mini-fab><md-icon>share</md-icon></button>
    <span class="md-primary">2503</span>
    </md-card-actions>
  </md-card>
`,
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent {
  @Input()
  picture: Picture;
}
