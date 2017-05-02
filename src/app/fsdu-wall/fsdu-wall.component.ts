import { Component } from '@angular/core';
import { FsduService } from '../shared/services/fsdu.service';
import { Fsdu } from '../shared/models/fsdu';

@Component({
  selector: 'fsdu-wall',
  templateUrl: './fsdu-wall.component.html',
  styleUrls: ['./fsdu-wall.component.css'],
  providers: [FsduService]
})
export class FsduWallComponent {
  fsduList: Array<Fsdu>;
  constructor(private photoWallService: FsduService) {
    this.fsduList = this.photoWallService.getPictures();
  };
}
