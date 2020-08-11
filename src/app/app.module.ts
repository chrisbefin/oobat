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
import { GameService } from './game.service';
import { SPSummaryComponent } from './sp-summary/sp-summary.component';
import { SurvivalComponent } from './survival/survival.component';
import { SuddenDeathComponent } from './sudden-death/sudden-death.component';

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
    ClassicComponent,
    SPSummaryComponent,
    SurvivalComponent,
    SuddenDeathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
