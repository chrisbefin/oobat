import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../game.service';
import { GameSession } from '../models/gameSession';

@Component({
  selector: 'app-mp-game',
  templateUrl: './mp-game.component.html',
  styleUrls: ['./mp-game.component.css']
})
export class MpGameComponent implements OnInit {
  session: GameSession;
  private SessionSub: Subscription;

  currKey : string;
  hint1 : string;
  hint2 : string;
  hint3 : string;
  hint4 : string;
  hint5 : string;
  score : number;
  timeLeft: number = 60;
    interval;
  constructor(private service: GameService, private router: Router) {//constructor links game service

  }

  ngOnInit() { //initialization function
    this.score = 0;// player score starts at 0
    this.getNextCard();//loads in first card
    this.startTimer();//starts the game timer
    this.SessionSub = this.service.currentSession.subscribe(session => {
      this.session = session;
      console.log("new session data received");
    });
    this.getSession();
  }

  getSession() {
    this.service.getSession().then(data => {
      this.session = data;
    });
  }

  checkAnswer() {//called to confirm if user input is correct answer or not
    let guess = (<HTMLInputElement>document.getElementById("answer")).value;
    console.log(guess);
    if (guess == this.currKey) {
      this.getNextCard(); // advnce to next card
      this.score = this.score + 1;
      this.session.playerScoreList[this.service.currPlayerNum-1] = this.score; // update session score
      //playerNum - 1 is playerIndex
      this.service.modifySession(this.session); // broadcast the change to other clients
      (<HTMLInputElement>document.getElementById("answer")).value = ""; // empty the text field
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

  gameOver() { //navigate to end game screen
    this.router.navigate(['/mp-summary']);
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

  ngOnDestroy() {
    this.timeLeft = -1;
    this.SessionSub.unsubscribe(); //kill the subscription when the you move to a new page
  }
}
