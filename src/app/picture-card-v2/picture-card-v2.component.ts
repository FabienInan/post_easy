import { Component, Inject, Input } from '@angular/core';

import { Picture } from '../photowall/picture';

@Component({
  selector: 'picture-card-v2',
  templateUrl: './picture-card-v2.component.html',
  styleUrls: ['./picture-card-v2.component.scss']
})
export class PictureCardV2Component {
  @Input()
  picture: Picture;
}
