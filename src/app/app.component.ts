import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <section fxFlexFill fxLayout="column">
    <toolbar-fsdu [sidenav]="sidenav"></toolbar-fsdu>
    <md-sidenav-container class="container" fxFlex>
      <md-sidenav style="background: #FAFAFA;" mode="side" opened="true" #sidenav class="sidenav">
        <filters></filters>
      </md-sidenav>
      <photo-wall fxFlexFill></photo-wall>
    </md-sidenav-container>
  </section>
`,
  styles: [`
    .sidenav {
      width: 20%;
    }
    @media only screen and (max-width: 800px) {
      .sidenav {
        width: 100%;
      }
    }
`]
})
export class AppComponent { }
