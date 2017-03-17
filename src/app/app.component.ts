import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <toolbar-fsdu [sidenav]="sidenav"></toolbar-fsdu>
  <md-sidenav-container class="container">
    <md-sidenav mode="side" opened="true" #sidenav class="sidenav">
      <filters></filters>
    </md-sidenav>
    <photo-wall style="height: 1000px; overflow-y: auto"></photo-wall>
  </md-sidenav-container>
`,
  styles: [`
    .container {
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
    .sidenav {
      display: flex;
      width: 20%;
      justify-content: center;
      position: fixed;
    }
    @media only screen and (max-width: 800px) {
      .sidenav {
        display: flex;
        width: 99%;
        justify-content: center;
      }
    }
`]
})
export class AppComponent { }
