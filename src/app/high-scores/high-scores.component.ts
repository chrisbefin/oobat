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
      console.log(data);
    });
  }
}
