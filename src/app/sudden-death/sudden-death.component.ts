import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-sudden-death',
  templateUrl: './sudden-death.component.html',
  styleUrls: ['./sudden-death.component.css']
})
export class SuddenDeathComponent implements OnInit, OnDestroy {
  currKey : string;
  hint1 : string;
  hint2 : string;
  hint3 : string;
  hint4 : string;
  hint5 : string;
  score : number;
  strikes : number;
  constructor(private service: GameService, private router: Router) {//constructor links game service

  }

  ngOnInit() { //initialization function
    this.score = 0; // player score starts at 0
    this.strikes = 0; // player starts with zero strikes
    this.getNextCard(); //loads in first card
  }

  checkAnswer() {//called to confirm if user input is correct answer or not
    let guess = (<HTMLInputElement>document.getElementById("answer")).value;
    console.log(guess);
    if (guess == this.currKey) {
      this.getNextCard(); //load next card in
      this.score = this.score + 1;
      this.strikes = 0; // resest strikes after a correct guess
      (<HTMLInputElement>document.getElementById("answer")).value = "";
    }
    else {
      this.strikes = this.strikes + 1;
      if (this.strikes == 3) {
        this.gameOver();
      }
    }
  }

  getNextCard() {//called when a new card needs to be loaded in to the component
    this.service.getCard().then(data => {
      console.log(data);
      this.currKey = data.rows[0].key;
      this.hint1 = data.rows[0].hint1;
      this.hint2 = data.rows[0].hint2;
      this.hint3 = data.rows[0].hint3;
      this.hint4 = data.rows[0].hint4;
      this.hint5 = data.rows[0].hint5;
    });
  }

  gameOver() { //navigate to end game screen, pass along score and game mode
    this.router.navigate(['/sp-summary', this.score, "suddendeath"])
  }

  ngOnDestroy() {
    console.log("destroyed");
  }
}
