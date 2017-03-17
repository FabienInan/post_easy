import { Component, Input} from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'toolbar-fsdu',
  template: `
  <md-toolbar color="primary">
    <button md-icon-button (click)="sidenav.toggle()">
      <md-icon>reorder_horizontal</md-icon>
    </button>
    <span>FSDU</span>
    <span class="spacer"></span>
    <button md-icon-button>
      <md-icon>account_circle</md-icon>
    </button>
    <button md-icon-button>
      <md-icon>power_settings_new</md-icon>
    </button>
  </md-toolbar>
`
})
export class ToolbarComponent {
  @Input()
  sidenav: MdSidenav;
}
