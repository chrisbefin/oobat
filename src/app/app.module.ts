import { BrowserModule } from '@angular/platform-browser'; // functionality imports
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio'; // style imports
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module'; // navigation imports
import { AppComponent } from './app.component';

import { HighScoresComponent } from './high-scores/high-scores.component'; //custom component imports
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SPMenuComponent } from './sp-menu/sp-menu.component';
import { MPMenuComponent } from './mp-menu/mp-menu.component';
import { ClassicComponent } from './classic/classic.component';
import { GameService } from './game.service';
import { SPSummaryComponent } from './sp-summary/sp-summary.component';
import { SurvivalComponent } from './survival/survival.component';
import { SuddenDeathComponent } from './sudden-death/sudden-death.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LobbyComponent } from './lobby/lobby.component';
import { MpSummaryComponent } from './mp-summary/mp-summary.component';
import { MpGameComponent } from './mp-game/mp-game.component';

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
    SuddenDeathComponent,
    JoinGroupComponent,
    CreateGroupComponent,
    LobbyComponent,
    MpSummaryComponent,
    MpGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
