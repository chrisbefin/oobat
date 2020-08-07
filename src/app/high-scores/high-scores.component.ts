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

  constructor(private service: GameService) { }

  ngOnInit(): void {
  }

  getScores() {
    this.service.getScores("incremental").then(data => {
      console.log(typeof data);
      console.log(data);
      console.log(data.rows);
      console.log(data.rows[0]);
      document.getElementById("player1").innerHTML = "fin";
      document.getElementById("player2").innerHTML = data.rows[1].name;
      document.getElementById("player3").innerHTML = data.rows[2].name;

      document.getElementById("score1").innerHTML = data.rows[0].score;
      document.getElementById("score2").innerHTML = data.rows[1].score;
      document.getElementById("score3").innerHTML = data.rows[2].score;
    });
  }
}
