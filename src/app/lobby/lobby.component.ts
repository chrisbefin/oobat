import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../game.service';
import { GameSession } from '../models/gameSession';
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  session: GameSession;
  private _SessionSub: Subscription;

  constructor(private service: GameService) {
     this._SessionSub = this.service.currentSession.subscribe(session => this.session = session);
  }

  ngOnInit(): void {
  }

}
