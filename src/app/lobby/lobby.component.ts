import { Component, OnInit, OnDestroy } from '@angular/core';
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
  private SessionSub: Subscription;

  constructor(private service: GameService) {
  }

  ngOnInit(): void {
    this.SessionSub =  this.service.currentSession.subscribe(session => {
      this.session = session;
      console.log("new session data received");
    });
    this.updateLobby();
  }

  updateLobby() {
    this.service.getSession();
    console.log("request updated session from server");
  }
  ngOnDestroy() {
    this.SessionSub.unsubscribe(); //kill the subscription when the you move to a new page
  }

}
