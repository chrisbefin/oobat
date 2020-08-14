import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
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
  isHost: boolean;
  constructor(private service: GameService, private router: Router) {
  }

  ngOnInit(): void {
    this.SessionSub = this.service.currentSession.subscribe(session => {
      this.session = session;
      console.log("new session data received");
    });
    if (this.service.currPlayerNum == 1) { // player created the session and is host
      this.isHost = true;
    }
    this.getSession();
  }

  startGame() {
    if (this.isHost == true) {
      this.session.active = true; // game is starting so session goes active
    }
    this.router.navigate(['/mp-game']); // go to the game component to actually play
  }
  getSession() {
    this.service.getSession().then(data => {
      this.session = data;
    });
  }

  ngOnDestroy() {
    this.SessionSub.unsubscribe(); //kill the subscription when the you move to a new page
  }

}
