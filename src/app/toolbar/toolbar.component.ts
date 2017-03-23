import { Component, Input } from '@angular/core';

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
    <img class="avatar" src="../../assets/avatar.jpeg"/>
    <span>Bonjour Fabien</span>
    <button md-icon-button>
      <md-icon>power_settings_new</md-icon>
    </button>
  </md-toolbar>
`,
  styles: [`
    .avatar{
      height: 48px;
      width: 48px;
      border-radius: 48px;
      padding:5px;
    }
  `
  ]
})
export class ToolbarComponent {
  @Input()
  sidenav: MdSidenav;
}
