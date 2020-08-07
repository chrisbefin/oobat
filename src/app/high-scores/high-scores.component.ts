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
      console.log(JSON.parse(data));
      console.log(data);
      let result = JSON.parse(data);
      console.log(data.rows);
      console.log(data.rows[0]);
      console.log(data.rows[0].__proto__.tostring())
      document.getElementById("name1").innerHTML = result.rows[0].name;
      document.getElementById("name2").innerHTML = result.rows[1].name;
      document.getElementById("name3").innerHTML = result.rows[2].name;

      document.getElementById("score1").innerHTML = result.rows[0].score;
      document.getElementById("score2").innerHTML = result.rows[1].score;
      document.getElementById("score3").innerHTML = result.rows[2].score;
    });
  }
}
