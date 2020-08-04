import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  { path: 'high-scores', component: HighScoresComponent },
  { path: 'main-menu', component: MainMenuComponent},
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
