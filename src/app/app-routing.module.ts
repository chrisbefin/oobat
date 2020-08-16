import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighScoresComponent } from './components/high-scores/high-scores.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SPMenuComponent} from './components/sp-menu/sp-menu.component';
import { MPMenuComponent } from './components/mp-menu/mp-menu.component';
import { ClassicComponent } from './components/classic/classic.component';
import { SPSummaryComponent } from './components/sp-summary/sp-summary.component';
import { SurvivalComponent } from './components/survival/survival.component';
import { SuddenDeathComponent } from './components/sudden-death/sudden-death.component';
import { JoinGroupComponent } from './components/join-group/join-group.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { MpGameComponent } from './components/mp-game/mp-game.component';
import { MpSummaryComponent } from './components/mp-summary/mp-summary.component';

const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'high-scores', component: HighScoresComponent },
  { path: 'sp-menu', component: SPMenuComponent },
  { path: 'mp-menu', component: MPMenuComponent },
  { path: 'join-group', component: JoinGroupComponent},
  { path: 'create-group', component: CreateGroupComponent},
  { path: 'lobby', component: LobbyComponent },
  { path: 'classic', component: ClassicComponent },
  { path: 'survival', component: SurvivalComponent },
  { path: 'sudden-death', component: SuddenDeathComponent},
  { path: 'mp-game', component: MpGameComponent },
  { path: 'sp-summary', component: SPSummaryComponent },
  { path: 'mp-summary', component: MpSummaryComponent },
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
