import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../game.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css'],
  providers: [GameService]
})
export class ClassicComponent implements OnInit {
  currKey : string;
  score : number;
  timeLeft: number = 60;
    interval;
  constructor(private service: GameService, private router: Router) {//constructor links game service

  }

  ngOnInit() { //initialization function
    this.score = 0;// player score starts at 0
    this.getNextCard();//loads in first card
    this.startTimer();//starts the game timer
  }

  checkAnswer() {//called to confirm if user input is correct answer or not
    let guess = (<HTMLInputElement>document.getElementById("answer")).value;
    console.log(guess);
    if (guess == this.currKey) {
      this.getNextCard();
      this.score = this.score + 1;
      console.log("score:", this.score);
      (<HTMLInputElement>document.getElementById("answer")).value = "";
    }
  }

  getNextCard() {//called when a new card needs to be loaded in to the component
    this.service.getCard().then(data => {
      console.log(data);
      this.currKey = data.rows[0].key;
      document.getElementById("hint1").innerHTML = data.rows[0].hint1;
      document.getElementById("hint2").innerHTML = data.rows[0].hint2;
      document.getElementById("hint3").innerHTML = data.rows[0].hint3;
      document.getElementById("hint4").innerHTML = data.rows[0].hint4;
      document.getElementById("hint5").innerHTML = data.rows[0].hint5;
    });
  }

  gameOver() { //navigate to end game screen, pass along score and game mode
    this.router.navigate(['/sp-summary', this.score, "classic"])
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft == 0){
        this.gameOver();
      }
    },1000)
  }

}
