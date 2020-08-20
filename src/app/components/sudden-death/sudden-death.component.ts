import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { GameService } from 'src/app/game.service';

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
  gameForm;

  constructor(private service: GameService, private router: Router, private formBuilder: FormBuilder) {
    this.gameForm = this.formBuilder.group({ // template for the form
      answer: ['',Validators.required]
    });
  }

  ngOnInit() { //initialization function
    this.score = 0; // player score starts at 0
    this.strikes = 0; // player starts with zero strikes
    this.getNextCard(); //loads in first card
  }

  onSubmit(gameData) {
    let answer = gameData.answer.toLowerCase() // convert player's response to lower case
    if (answer == this.currKey) { // their answer is correct
      this.gameForm.reset(); // reset the form
      this.getNextCard(); // load in a new card
      this.strikes = 0; // reset the number of strikes
      this.score = this.score + 1; // increment score
    }
    else { // their answer is incorrect
      this.strikes = this.strikes + 1; //increment strikes
      if (this.strikes == 3) { // it is their 3rd strike
        this.gameOver()
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
    this.service.currSPScore = this.score;
    this.service.currSPGameMode = "suddendeath";
    this.router.navigate(['/sp-summary']);
  }

  ngOnDestroy() {
    console.log("destroyed");
  }
}
