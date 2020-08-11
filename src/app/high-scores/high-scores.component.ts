import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css'],
  providers: [GameService]
})
export class HighScoresComponent implements OnInit {
  classicPlayer1 : string;
  classicPlayer2 : string;
  classicPlayer3 : string;
  classicScore1 : number;
  classicScore2 : number;
  classicScore3 : number;

  survivalPlayer1 : string;
  survivalPlayer2 : string;
  survivalPlayer3 : string;
  survivalScore1 : number;
  survivalScore2 : number;
  survivalScore3 : number;

  suddenPlayer1 : string;
  suddenPlayer2 : string;
  suddenPlayer3 : string;
  suddenScore1 : number;
  suddenScore2 : number;
  suddenScore3 : number;

  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.getAllScores();
  }

  getAllScores() {
    this.service.getScores("classic").then(data => {
      this.classicPlayer1 = data.rows[0].name;
      this.classicPlayer2 = data.rows[1].name;
      this.classicPlayer3 = data.rows[2].name;

      this.classicScore1 = data.rows[0].score;
      this.classicScore2 = data.rows[1].score;
      this.classicScore3 = data.rows[2].score;
    });

    this.service.getScores("survival").then(data => {
      this.survivalPlayer1 = data.rows[0].name;
      this.survivalPlayer2 = data.rows[1].name;
      this.survivalPlayer3 = data.rows[2].name;

      this.survivalScore1 = data.rows[0].score;
      this.survivalScore2 = data.rows[1].score;
      this.survivalScore3 = data.rows[2].score;
    });

    this.service.getScores("suddendeath").then(data => {
      this.suddenPlayer1 = data.rows[0].name;
      this.suddenPlayer2 = data.rows[1].name;
      this.suddenPlayer3 = data.rows[2].name;

      this.suddenScore1 = data.rows[0].score;
      this.suddenScore2 = data.rows[1].score;
      this.suddenScore3 = data.rows[2].score;
    });
  }
}
