import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SPMenuComponent } from './sp-menu/sp-menu.component';
import { MPMenuComponent } from './mp-menu/mp-menu.component';
import { ClassicComponent } from './classic/classic.component';

let hostname = window.location.hostname;
let url = ( hostname === 'localhost' ) ? `${window.location.protocol}//${hostname}:8080` : undefined;
const config: SocketIoConfig = { url: url, options: {} };
console.log( config );

@NgModule({
  declarations: [
    AppComponent,
    HighScoresComponent,
    MainMenuComponent,
    SPMenuComponent,
    MPMenuComponent,
    ClassicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
