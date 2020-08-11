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

  incrementalPlayer1 : string;
  incrementalPlayer2 : string;
  incrementalPlayer3 : string;
  incrementalScore1 : number;
  incrementalScore2 : number;
  incrementalScore3 : number;

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

  getIncrementalScores() {
    this.service.getScores("incremental").then(data => {
      this.incrementalPlayer1 = data.rows[0].name;
      this.incrementalPlayer2 = data.rows[1].name;
      this.incrementalPlayer3 = data.rows[2].name;

      this.incrementalScore1 = data.rows[0].score;
      this.incrementalScore2 = data.rows[1].score;
      this.incrementalScore3 = data.rows[2].score;
    });
  }

  getSuddenScores() {
    this.service.getScores("suddendeath").then(data => {
      this.suddenPlayer1 = data.rows[0].name;
      this.suddenPlayer2 = data.rows[1].name;
      this.suddenPlayer3 = data.rows[2].name;

      this.suddenScore1 = data.rows[0].score;
      this.suddenScore2 = data.rows[1].score;
      this.suddenScore3 = data.rows[2].score;
    });
  }
  
  getClassicScores() {
    this.service.getScores("classic").then(data => {
      this.classicPlayer1 = data.rows[0].name;
      this.classicPlayer2 = data.rows[1].name;
      this.classicPlayer3 = data.rows[2].name;

      this.classicScore1 = data.rows[0].score;
      this.classicScore2 = data.rows[1].score;
      this.classicScore3 = data.rows[2].score;
    });
  }
}
