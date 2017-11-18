import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ChanelsComponent } from './chanels/chanels.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChanelComponent } from './chanel/chanel.component';


@NgModule({
  declarations: [
    AppComponent,
    ChanelsComponent,
    NavbarComponent,
    ChanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
