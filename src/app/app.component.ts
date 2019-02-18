import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { VKService } from './shared/services/vk.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public isLoggedIn: boolean;
  constructor(public vkService: VKService, private router: Router,
      private mdIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
      this.mdIconRegistry.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/mdi.svg'));
      this.vkService.getLoginStatus(
        (response) => {
          if (response.status === 'connected'){
             this.isLoggedIn = true;
             this.router.navigate(['home']);
            } else {
              this.router.navigate(['']);
              this.isLoggedIn = false;
              }
            }
      );
      this.router.events.subscribe(path => {
        if (path.constructor.name === 'NavigationStart') {
          this.vkService.getLoginStatus(
              (response) => {
                this.isLoggedIn = false;
                if (response.status === 'connected'){
                  this.isLoggedIn = true;
                }
              }
          );
        }
      });
  }
}
