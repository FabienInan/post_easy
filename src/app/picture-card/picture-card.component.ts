import { Component, Inject, Input } from '@angular/core';

import { Picture } from '../photowall/picture';

@Component({
  selector: 'picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent {
  @Input()
  picture: Picture;
}
