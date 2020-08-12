import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SPMenuComponent} from './sp-menu/sp-menu.component';
import { MPMenuComponent } from './mp-menu/mp-menu.component';
import { ClassicComponent } from './classic/classic.component';
import { SPSummaryComponent } from './sp-summary/sp-summary.component';
import { SurvivalComponent } from './survival/survival.component';
import { SuddenDeathComponent } from './sudden-death/sudden-death.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { CreateGroupComponent } from './create-group/create-group.component';

const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'high-scores', component: HighScoresComponent },
  { path: 'sp-menu', component: SPMenuComponent },
  { path: 'mp-menu', component: MPMenuComponent },
  { path: 'join-group', component: JoinGroupComponent},
  { path: 'create-group', component: CreateGroupComponent},
  { path: 'classic', component: ClassicComponent },
  { path: 'survival', component: SurvivalComponent },
  { path: 'sudden-death', component: SuddenDeathComponent},
  { path: 'sp-summary/:score/:mode', component: SPSummaryComponent },
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
