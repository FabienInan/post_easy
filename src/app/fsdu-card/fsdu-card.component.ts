import { Component, Inject, Input } from '@angular/core';

import { Fsdu } from '../shared/models/fsdu';

@Component({
  selector: 'fsdu-card',
  templateUrl: './fsdu-card.component.html',
  styleUrls: ['./fsdu-card.component.scss']
})
export class FsduCardComponent {
  @Input()
  fsdu: Fsdu;
}
