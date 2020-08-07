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
    this.getScores();
  }

  getScores() {
    this.service.getScores("incremental").then(data => {
      console.log(typeof data);
      console.log(data);
      console.log(<string>data);
      console.log(data.keys());
      document.getElementById("name1").innerHTML = <string>data.rows[0].name;
      document.getElementById("name2").innerHTML = data.rows[1].name;
      document.getElementById("name3").innerHTML = data.rows[2].name;

      document.getElementById("score1").innerHTML = data.rows[0].score;
      document.getElementById("score2").innerHTML = data.rows[1].score;
      document.getElementById("score3").innerHTML = data.rows[2].score;
    });
  }
}
