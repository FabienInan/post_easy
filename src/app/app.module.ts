import { AdminGroupComponent } from './home/admin-group/admin-group.component';
import { MyVkGroupsComponent } from './home/my-vk-groups/my-vk-groups.component';
import { VKService } from './shared/services/vk.service';
import { UserService } from './shared/services/user.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularFireModule } from 'angularfire2';
import {RouterModule, Routes} from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslatePoHttpLoader } from '@biesbjerg/ngx-translate-po-http-loader';

export function createTranslateLoader(http: Http) {
	return new TranslatePoHttpLoader(http, 'assets/i18n', '.po');
}


export const firebaseConfig = {
  apiKey: "AIzaSyC1-rtrVp1KbiFOXvsZtS8zFwT5paAr5Qk",
  authDomain: "post-easy.firebaseapp.com",
  databaseURL: "https://post-easy.firebaseio.com",
  storageBucket: "post-easy.appspot.com",
  messagingSenderId: "4291798914"
};

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    MyVkGroupsComponent,
    AdminGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [Http]
			}
		}),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, VKService],
  bootstrap: [AppComponent]
})
export class AppModule { }
