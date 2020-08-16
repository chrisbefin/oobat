import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GameService } from 'src/app/game.service';
import { GameSession } from 'src/app/models/GameSession';

@Component({
  selector: 'app-mp-summary',
  templateUrl: './mp-summary.component.html',
  styleUrls: ['./mp-summary.component.css']
})
export class MpSummaryComponent implements OnInit {
  session: GameSession;
  topScore: number;
  topPlayer: string;

  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {
    this.getSession();
  }

  getSession() {
    this.service.getSession().then(data => {
      this.session = data;
      this.getTopPlayer();
    });
  }

  getTopPlayer() { // finds the winner/ highest scoring player
    let maxIndex = this.session.numPlayers - 1; //max index to check
    let topPlayer = 0; //tracks index of highest scoring player
    for (let idx = 0; idx <= maxIndex; idx++) {
      if (this.session.playerScoreList[idx] > this.session.playerScoreList[topPlayer]) {
        topPlayer = idx; //top player updated
      }
    }
    this.topScore = this.session.playerScoreList[topPlayer];
    this.topPlayer = this.session.playerNameList[topPlayer];
  }
}
