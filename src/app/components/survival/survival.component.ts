import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.css']
})
export class SurvivalComponent implements OnInit {
  currKey : string;
  hint1 : string;
  hint2 : string;
  hint3 : string;
  hint4 : string;
  hint5 : string;
  score : number;
  timeLeft: number = 15;
    interval;
  gameForm;

  constructor(private service: GameService, private router: Router, private formBuilder: FormBuilder) {
    this.gameForm = this.formBuilder.group({ // template for the form
      answer: ['',Validators.required]
    });
  }

  ngOnInit() { //initialization function
    this.score = 0;// player score starts at 0
    this.getNextCard();//loads in first card
    this.startTimer();//starts the game timer
  }

  onSubmit(gameData) {
    let answer = gameData.answer.toLowerCase() // convert player's response to lower case
    if (answer == this.currKey) { // their answer is correct
      this.gameForm.reset(); // reset the form
      this.getNextCard(); // load in a new card
      this.score = this.score + 1; // increment
      this.timeLeft = this.timeLeft + 5; // add five seconds to the clock
    }
  }

  getNextCard() {//called when a new card needs to be loaded in to the component
    this.service.getCard().then(data => {
      this.currKey = data.rows[0].key;
      this.hint1 = data.rows[0].hint1;
      this.hint2 = data.rows[0].hint2;
      this.hint3 = data.rows[0].hint3;
      this.hint4 = data.rows[0].hint4;
      this.hint5 = data.rows[0].hint5;
    });
  }

  gameOver() { //navigate to end game screen, pass along score and game mode
    this.service.currSPScore = this.score;
    this.service.currSPGameMode = "survival";
    this.router.navigate(['/sp-summary']);
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
  }

}
